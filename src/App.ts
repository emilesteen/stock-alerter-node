import {Supplier} from "./supplier/Supplier";
import {Alerter} from "./alerter/Alerter";
import {Product} from "./domain/product";

export class App {
    suppliers: Supplier[]
    alerter: Alerter
    sleepDurationInSeconds: number

    constructor(suppliers: Supplier[], alerter: Alerter, sleepDurationInSeconds: number) {
        this.suppliers = suppliers
        this.alerter = alerter
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

            this.suppliers.forEach(
                (supplier: Supplier) => {
                    supplier.findProductsInStock().then(
                        (products: Product[]) => products.forEach((product: Product) => this.alerter.alert(product) )
                    )
                }
            )
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
