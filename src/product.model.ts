export class Product {
  id: number;
  code: number;
  name: string;
  price: number;

  constructor(code, name, price) {
    this.code = code;
    this.name = name;
    this.price = price;
  }
}
