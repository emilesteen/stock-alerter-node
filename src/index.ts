import {App} from "./App";
import {Alerter} from "./alerter/Alerter";
import {SlackAlerter} from "./alerter/implementation/SlackAlerter";
import {Supplier} from "./supplier/Supplier";
import {MediaMarktSupplier} from "./supplier/implementation/MediaMarktSupplier";

function setUp() {
    const dotenv = require('dotenv')
    dotenv.config()
}

function generateSuppliers(): Supplier[] {
    return [
        new MediaMarktSupplier()
    ]
}

function generateAlerter(): Alerter {
    const hookUrl: string = process.env["SLACK_HOOK_URL"] ? process.env["SLACK_HOOK_URL"] : ""

    return  new SlackAlerter(hookUrl)
}


function determineSleepTimeInSeconds(): number {
    return parseInt(process.env["SLEEP_DURATION_IN_SECONDS"] ? process.env["SLEEP_DURATION_IN_SECONDS"] : "")
}

setUp()

const suppliers = generateSuppliers()
const alerter = generateAlerter()
const sleepTimeInSeconds = determineSleepTimeInSeconds()

new App(suppliers, alerter, sleepTimeInSeconds).start().then()