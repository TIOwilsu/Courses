export class Order {
  public isValid(): boolean {
    return true;
  }

  public applyDiscount() {}

  public processPayment() {
    return true;
  }

  public ship() {}
}
