import {Alerter} from "../Alerter";
import {Product} from "../../domain/product";

export class MockAlerter extends Alerter {
    alert(product: Product) {
        console.log(`${product.name} is in stock at ${product.supplierName} for €${product.price}\n\n${product.url}`)
    }
}