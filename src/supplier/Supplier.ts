import {Product} from "../domain/Product";

export abstract class Supplier {
    cheerio = require('cheerio');

    abstract findProductsInStock(): Promise<Product[]>
}