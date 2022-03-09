import {Supplier} from "../Supplier";
import {Alerter} from "../../alerter/Alerter";
import axios from "axios";
import {Product} from "../../domain/product";

export class MockSupplier extends Supplier {
    name: string = "bol.com"

    constructor(alerter: Alerter) {
        super(alerter)
    }

    findProductsInStock(): Promise<Product[]> {
        return Promise.resolve([
            new Product(
                "Sony Playstation 5 Console",
                "499.00",
                "https://www.bol.com/nl/nl/p/sony-playstation-5-console/9300000004162282/?ruleRedirect=1&sI=playstation%205&variants=",
                this.name
            )
        ]);
    }
}
