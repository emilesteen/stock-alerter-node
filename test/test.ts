import {MediaMarktSupplier} from "../src/supplier/implementation/MediaMarktSupplier";
import {MockAlerter} from "../src/alerter/implementation/MockAlerter";

new MediaMarktSupplier(new MockAlerter()).findProductsInStockAndAlertForEachProduct()