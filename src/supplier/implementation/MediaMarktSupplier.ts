import {Supplier} from "../Supplier";
import {Product} from "../../domain/Product";
import axios from "axios";

export class MediaMarktSupplier extends Supplier {
    private readonly URL = "https://www.mediamarkt.nl"
    private readonly LISTING_ENDPOINT = "/nl/category/_playstation-5-consoles-766027.html"
    private readonly NAME = "MediaMarkt"

    findProductsInStock(): Promise<Product[]> {
        return axios.get(`${this.URL}${this.LISTING_ENDPOINT}`).then(
            response => {
                const products: Product[] = []

                const $ = this.cheerio.load(response.data)
                const productList = $('ul[class=products-list]')
                const children = productList.children()

                for (let i = 1; i < children.length; i = i + 2) {
                    const child = children[i]
                    const isInStock = child.children[2]?.children[3]?.children[1]?.children[3]?.children[3]?.attribs["content"] !== "OutOfStock"

                    if (isInStock) {
                        const name = child.children[2]?.children[5]?.children[3]?.children[1]?.children[0]?.data?.trim()
                        const price = child.children[2]?.children[3]?.children[1]?.children[1]?.children[1]?.children[0]?.data
                        const endpoint = child.children[2]?.children[5]?.children[3]?.children[1]?.attribs?.href
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