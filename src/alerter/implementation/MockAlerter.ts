import {Alerter} from "../Alerter";

export class MockAlerter extends Alerter {
    alert(supplierName: String) {
        console.log(`The product is in stock with supplier ${supplierName}`)
    }
}