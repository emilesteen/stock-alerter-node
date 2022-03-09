import {App} from "../src/App";
import {Alerter} from "../src/alerter/Alerter";
import {MockAlerter} from "../src/alerter/implementation/MockAlerter";
import {Supplier} from "../src/supplier/Supplier";
import {BolSupplier} from "../src/supplier/implementation/BolSupplier";

const alerter: Alerter = new MockAlerter()
const suppliers: Supplier[] = [
    new BolSupplier(alerter)
]

new App(suppliers).run().then()