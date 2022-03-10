import {MockAlerter} from "../src/alerter/implementation/MockAlerter";
import {MockSupplier} from "../src/supplier/implementation/MockSupplier";
import {App} from "../src/App";

new App([new MockSupplier()], new MockAlerter(), 1).start().then()
