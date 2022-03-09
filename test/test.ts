import {MockAlerter} from "../src/alerter/implementation/MockAlerter";
import {MockSupplier} from "../src/supplier/implementation/MockSupplier";

new MockSupplier(new MockAlerter()).findProductsInStockAndAlertForEachProduct()