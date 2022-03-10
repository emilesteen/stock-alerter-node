import {Alerter} from "../Alerter";
import {Product} from "../../domain/product";

export class ConsoleAlerter extends Alerter {
    alert(product: Product) {
        console.log(`${product.name} is in stock at ${product.supplierName} for €${product.price}\n${product.url}\n`)
    }
}