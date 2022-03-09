import {Supplier} from "./supplier/Supplier";
import {BolSupplier} from "./supplier/implementation/BolSupplier";
import {MockAlerter} from "./alerter/implementation/MockAlerter";
import {Alerter} from "./alerter/Alerter";

export class App {
    suppliers: Supplier[] = App.determineSuppliers(App.determineAlerter())

    private static determineAlerter(): Alerter {
        return new MockAlerter()
    }

    private static determineSuppliers(alerter: Alerter): Supplier[] {
        return [
            new BolSupplier(alerter)
        ]
    }

    async start() {
        console.log("Starting Application...")

        while (true) {
            await this.runAndSleep()
        }
    }

    private async runAndSleep() {
        await this.run()
        await this.sleepFor(5)
    }

    async run() {
        console.log("Checking if product is in stock and alerting if needed for each supplier...")

        await this.checkIfProductIsInStockAndAlertIfNeededForEachSupplier()
    }

    private async checkIfProductIsInStockAndAlertIfNeededForEachSupplier() {
        this.suppliers.forEach((supplier: Supplier) => supplier.checkIfProductIsInStockAndAlertIfNeeded())
    }

    private async sleepFor(timeInSeconds: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, timeInSeconds * 1000);
        });
    }
}
