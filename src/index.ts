import {App} from "./App";
import {Alerter} from "./alerter/Alerter";
import {SlackAlerter} from "./alerter/implementation/SlackAlerter";
import {Supplier} from "./supplier/Supplier";
import {MediaMarktSupplier} from "./supplier/implementation/MediaMarktSupplier";

function setUp() {
    setUpDotenv()
    setUpTimeStampLogging()
}

function setUpDotenv() {
    const dotenv = require('dotenv')
    dotenv.config()
}

function setUpTimeStampLogging() {
    require('log-timestamp');
}

function generateSuppliers(): Supplier[] {
    return [
        new MediaMarktSupplier()
    ]
}

function generateAlerters(): Alerter[] {
    const slackHookUrl: string = process.env["SLACK_HOOK_URL"] ? process.env["SLACK_HOOK_URL"] : ""

    return [
        new SlackAlerter(slackHookUrl),
    ]
}

function determineSleepTimeInSeconds(): number {
    return parseInt(process.env["SLEEP_DURATION_IN_SECONDS"] ? process.env["SLEEP_DURATION_IN_SECONDS"] : "10")
}

setUp()

const suppliers = generateSuppliers()
const alerter = generateAlerters()
const sleepTimeInSeconds = determineSleepTimeInSeconds()

new App(suppliers, alerter, sleepTimeInSeconds).start().then()