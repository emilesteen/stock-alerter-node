import {ConsoleAlerter} from "../src/alerter/implementation/ConsoleAlerter";
import {MockSupplier} from "../src/supplier/implementation/MockSupplier";
import {App} from "../src/App";

new App([new MockSupplier()], [new ConsoleAlerter()], 1).start().then()
