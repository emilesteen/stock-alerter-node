import {Alerter} from "../alerter/Alerter";

export abstract class Supplier {
    abstract name: String

    alerter: Alerter

    protected constructor(alerter: Alerter) {
        this.alerter = alerter
    }

    checkIfProductIsInStockAndAlertIfNeeded() {
        this.checkIfProductIsInStock().then(
            (isProductInStock: boolean) => isProductInStock ? this.alerter.alert(this.name) : null
        )
    }

    checkIfProductIsInStock(): Promise<boolean> {
        const promises = Promise.all([
            this.checkIfDigitalEditionIsInStock(),
            this.checkIfDiscEditionIsInStock()
        ])

        return promises.then((results: boolean[]) => results.filter((result) => result).length > 0)
    }

    abstract checkIfDigitalEditionIsInStock(): Promise<boolean>

    abstract checkIfDiscEditionIsInStock(): Promise<boolean>
}