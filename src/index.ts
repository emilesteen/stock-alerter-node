import {App} from "./App";
import {Supplier} from "./supplier/Supplier";
import {Alerter} from "./alerter/Alerter";
import {BolSupplier} from "./supplier/implementation/BolSupplier";
import {SlackAlerter} from "./alerter/implementation/SlackAlerter";

const dotenv = require('dotenv')
dotenv.config()

const hookUrl: string = process.env["SLACK_HOOK_URL"] ? process.env["SLACK_HOOK_URL"] : ""

const alerter: Alerter = new SlackAlerter(hookUrl)
const suppliers: Supplier[] = [
    new BolSupplier(alerter)
]

new App(suppliers).start().then()