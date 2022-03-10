import {Product} from "../domain/product";

export abstract class Supplier {
    abstract name: string

    cheerio = require('cheerio');

    abstract findProductsInStock(): Promise<Product[]>
}