import {Supplier} from "../Supplier";
import {Alerter} from "../../alerter/Alerter";
import axios from "axios";

export class BolSupplier extends Supplier {
    name: String = "bol.com"

    static readonly DIGITAl_EDITION_URL = "https://www.bol.com/nl/nl/p/sony-playstation-5-all-digital-console/9300000004162392/"
    static readonly DISC_EDITION_URL = "https://www.bol.com/nl/nl/p/sony-playstation-5-console/9300000004162282/"

    constructor(alerter: Alerter) {
        super(alerter)
    }

    checkIfDigitalEditionIsInStock(): Promise<boolean> {
        axios.get(BolSupplier.DIGITAl_EDITION_URL)

        return Promise.resolve(true)
    }

    checkIfDiscEditionIsInStock(): Promise<boolean> {
        axios.get(BolSupplier.DISC_EDITION_URL)

        return Promise.resolve(true)
    }
}
