export abstract class DataParser {
  public parserData(): void {
    this.loadData();
    const data = "Sample data";
    const parsedData = this.parse(data);
    this.validate(this.parserData);
    this.useData(parsedData);
  }

  protected loadData(): void {
    console.log("Loading data ...");
  }

  protected validate(data: any): void {
    console.log("Validating data ...");
  }

  protected useData(data: any): void {
    console.log("Using data ...");
  }

  protected abstract parse(data: any): void;
}
