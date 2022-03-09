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

function determineSleepTimeInSeconds(): number {
    return parseInt(process.env["SLEEP_DURATION_IN_SECONDS"] ? process.env["SLEEP_DURATION_IN_SECONDS"] : "")
}

setUp()

const alerter = generateAlerter()
const suppliers = generateSuppliers(alerter)
const sleepTimeInSeconds = determineSleepTimeInSeconds()

new App(suppliers, sleepTimeInSeconds).start().then()