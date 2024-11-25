//Task 1 Product Class
class Product {
  constructor(
    public id: number,
    public name: string,
    public amount: number,
    private stock: number
  ) {}

  public get getStock(): number {
    return this.stock;
  }

  public set setStock(value: number) {
    this.setStock = value;
  }

  increaseStock(quantity: number) {
    this.stock += quantity;
    console.log(`Stock increased by ${quantity}. New stock: ${this.stock}`);
  }

  decreaseStock(quantity: number) {
    this.stock -= quantity;
    console.log(`Stock decreased by ${quantity}. New stock: ${this.stock}`);
  }
}

const product1 = new Product(101, "Laptop", 1500, 50);
const product2 = new Product(102, "Smartphone", 799, 100);
const product3 = new Product(103, "Headphones", 199, 200);

product1.increaseStock(10);
product2.decreaseStock(20);
