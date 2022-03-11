import {Supplier} from "../Supplier";
import {Product} from "../../domain/Product";
import axios, {AxiosRequestConfig} from "axios";

export class CoolblueSupplier extends Supplier {
    private readonly URL = "https://www.coolblue.nl"
    private readonly LISTING_ENDPOINT = "/en/consoles/playstation5"
    private readonly NAME = "Coolblue"

    findProductsInStock(): Promise<Product[]> {
        const config: AxiosRequestConfig = {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
            }
        }

        return axios.get(`${this.URL}${this.LISTING_ENDPOINT}`, config).then(
            response => {
                const products: Product[] = []

                const $ = this.cheerio.load(response.data)
                const productResults = $('div[id=product-results]')
                const children = productResults.children()[0].children

                for (let i = 1; i < children.length; i = i + 2) {
                    const child = children[i].children[1]
                    const button = child.children[1]?.children[3]?.children[9]?.children[1]?.children[3]?.children[1]
                    const isUnavailable = button?.children[3]?.attribs?.class === "color--unavailable"

                    if (button && !isUnavailable) {
                        const name = child.children[1]?.children[3]?.children[3]?.children[1]?.children[1]?.children[1]?.children[0]?.data
                        const price = child.children[1]?.children[3]?.children[9]?.children[1]?.children[1]?.children[0]?.children[0]?.data
                        const endpoint = child.children[1]?.children[3]?.children[3]?.children[1]?.children[1]?.children[1]?.attribs?.href
                        const url = `${this.URL}${endpoint}`

                        products.push(
                            new Product(
                                name,
                                price,
                                url,
                                this.NAME
                            )
                        )
                    }
                }

                return products
            }
        ).catch(
            error => {
                console.error(error)

                return []
            }
        )
    }
}