import {Supplier} from "./supplier/Supplier";

export class App {
    suppliers: Supplier[]
    sleepDurationInSeconds: number

    constructor(suppliers: Supplier[], sleepDurationInSeconds: number) {
        this.suppliers = suppliers
        this.sleepDurationInSeconds = sleepDurationInSeconds
    }

    async start() {
        console.log("Starting Application...")

        while (true) {
            await this.runAndSleep()
        }
    }

    private async runAndSleep() {
        await this.run()
        await this.sleepFor(this.sleepDurationInSeconds)
    }

    async run() {
        try {
            console.log("Finding all products in stock...")

            this.suppliers.forEach((supplier: Supplier) => supplier.findProductsInStockAndAlertForEachProduct())
        } catch (error: any) {
            console.error(error)
        }
    }

    private async sleepFor(timeInSeconds: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, timeInSeconds * 1000);
        });
    }
}
