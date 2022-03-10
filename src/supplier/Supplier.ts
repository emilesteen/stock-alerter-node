import {Product} from "../domain/Product";

export abstract class Supplier {
    abstract name: string

    cheerio = require('cheerio');

    abstract findProductsInStock(): Promise<Product[]>
}