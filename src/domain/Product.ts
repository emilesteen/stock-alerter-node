export class Product {
    name: string
    price: String
    url: string
    supplierName: string

    constructor(
        name: string,
        price: string,
        url: string,
        supplierName: string
    ) {
        this.name = name
        this.price = price
        this.url = url
        this.supplierName = supplierName
    }
}