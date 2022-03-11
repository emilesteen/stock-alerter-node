import {ConsoleAlerter} from "../src/alerter/implementation/ConsoleAlerter";
import {MockSupplier} from "../src/supplier/implementation/MockSupplier";
import {App} from "../src/App";
import {CoolblueSupplier} from "../src/supplier/implementation/CoolblueSupplier";
import {MediaMarktSupplier} from "../src/supplier/implementation/MediaMarktSupplier";

require('log-timestamp');

new App([new MockSupplier()], [new ConsoleAlerter()], 3).start().then()
