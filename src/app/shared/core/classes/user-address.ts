export class Address {
  public id?: number;
  public addressNumber: number;
  public street: string;
  public zipCode: string;
  public city: string;

  constructor(addressNumber: number, street: string, zipCode: string, city: string, id?: number ){
    this.id = id;
    this.addressNumber = addressNumber;
    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
  }

}
