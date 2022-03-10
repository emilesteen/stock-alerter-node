import {Product} from "../domain/Product";

export abstract class Alerter {
    abstract alert(product: Product): any
}
