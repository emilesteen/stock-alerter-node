import {Supplier} from "../Supplier";
import {Product} from "../../domain/Product";
import axios, {AxiosRequestConfig} from "axios";

export class CoolblueSupplier extends Supplier {
    private readonly LISTING_PAGE_URL = "https://www.coolblue.nl/en/consoles/playstation5"
    private readonly NAME = "Coolblue"

    findProductsInStock(): Promise<Product[]> {
        const config: AxiosRequestConfig = {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
            }
        }

        return axios.get(this.LISTING_PAGE_URL, config).then(
            response => {
                const products: Product[] = []

                const $ = this.cheerio.load(response.data)
                const productResults = $('div[id=product-results]')
                const children = productResults.children()[0]

                return products
            }
        )
    }
}