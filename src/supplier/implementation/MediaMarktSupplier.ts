import {Supplier} from "../Supplier";
import {Product} from "../../domain/Product";
import axios from "axios";

export class MediaMarktSupplier extends Supplier {
    private readonly TEST = "https://www.mediamarkt.nl/nl/category/_nintendo-consoles-670536.html"
    private readonly LISTING_PAGE_URL = "https://www.mediamarkt.nl/nl/category/_playstation-5-consoles-766027.html?langId=-11"
    private readonly NAME = "MediaMarkt"

    findProductsInStock(): Promise<Product[]> {
        return axios.get(this.TEST).then(
            response => {
                const products: Product[] = []

                const $ = this.cheerio.load(response.data)
                const productList = $('ul[class=products-list]')
                const children = productList.children()

                for (let i = 1; i < children.length; i = i + 2) {
                    const child = children[i]
                    const isInStock = child.children[2]?.children[3]?.children[1]?.children[3]?.children[3]?.attribs["content"] !== "OutOfStock"

                    if (isInStock) {
                        const price = child.children[2]?.children[3]?.children[1]?.children[1]?.children[1]?.children[0]?.data
                        const name = child.children[2]?.children[5]?.children[3]?.children[1]?.children[0]?.data?.trim()

                        products.push(
                            new Product(
                                name,
                                price,
                                this.LISTING_PAGE_URL,
                                this.NAME
                            )
                        )
                    }
                }

                return products
            }
        )
    }
}