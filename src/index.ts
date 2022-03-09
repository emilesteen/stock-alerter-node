import {App} from "./App";
import {Supplier} from "./supplier/Supplier";
import {Alerter} from "./alerter/Alerter";
import {MockAlerter} from "./alerter/implementation/MockAlerter";
import {BolSupplier} from "./supplier/implementation/BolSupplier";

const alerter: Alerter = new MockAlerter()
const suppliers: Supplier[] = [
    new BolSupplier(alerter)
]

new App(suppliers).start().then()