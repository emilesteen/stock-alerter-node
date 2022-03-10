import {ConsoleAlerter} from "../src/alerter/implementation/ConsoleAlerter";
import {MockSupplier} from "../src/supplier/implementation/MockSupplier";
import {App} from "../src/App";
import {CoolblueSupplier} from "../src/supplier/implementation/CoolblueSupplier";

require('log-timestamp');

new App([new CoolblueSupplier()], [new ConsoleAlerter()], 1).run().then()
