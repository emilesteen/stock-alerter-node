import {Product} from "../domain/product";

export abstract class Alerter {
    abstract alert(product: Product): any
}
