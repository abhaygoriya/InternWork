"use strict";
//Task 1 Product Class
class Product {
    constructor(id, name, amount, stock) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.stock = stock;
    }
    get getStock() {
        return this.stock;
    }
    set setStock(value) {
        this.setStock = value;
    }
    increaseStock(quantity) {
        this.stock += quantity;
        console.log(`Stock increased by ${quantity}. New stock: ${this.stock}`);
    }
    decreaseStock(quantity) {
        this.stock -= quantity;
        console.log(`Stock decreased by ${quantity}. New stock: ${this.stock}`);
    }
}
const product1 = new Product(101, "Laptop", 1500, 50);
const product2 = new Product(102, "Smartphone", 799, 100);
const product3 = new Product(103, "Headphones", 199, 200);
product1.increaseStock(10);
product2.decreaseStock(20);
