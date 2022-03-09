import {Alerter} from "../Alerter";
import {Product} from "../../domain/product";
import axios from "axios";

export class SlackAlerter extends Alerter {
    private  hookUrl: string

    constructor(hookUrl: string) {
        super();

        this.hookUrl = hookUrl
    }

    alert(product: Product): any {
        axios.post(
            this.hookUrl,
            {"text": `${product.name} is in stock at ${product.supplierName} for €${product.price}\n\n${product.url}`}
        ).then()
    }
}