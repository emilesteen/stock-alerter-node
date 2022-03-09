import {App} from "./App";
import {Alerter} from "./alerter/Alerter";
import {SlackAlerter} from "./alerter/implementation/SlackAlerter";
import {Supplier} from "./supplier/Supplier";
import {MediaMarktSupplier} from "./supplier/implementation/MediaMarktSupplier";

function setUp() {
    const dotenv = require('dotenv')
    dotenv.config()
}

function generateAlerter(): Alerter {
    const hookUrl: string = process.env["SLACK_HOOK_URL"] ? process.env["SLACK_HOOK_URL"] : ""

    return  new SlackAlerter(hookUrl)
}

function generateSuppliers(alerter: Alerter): Supplier[] {
    return [
        new MediaMarktSupplier(alerter)
    ]
}

setUp()

const alerter = generateAlerter()
const suppliers = generateSuppliers(alerter)

new App(suppliers).start().then()