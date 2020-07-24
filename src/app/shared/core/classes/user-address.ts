export class UserAddress {
  public id?: number;
  public streetNumber: number;
  public streetName: string;
  public zipCode: string;
  public cityName: string;

  constructor(streetNumber: number, streetName: string, zipCode: string, cityName: string, id?: number ){
    this.id = id;
    this.streetNumber = streetNumber;
    this.streetName = streetName;
    this.zipCode = zipCode;
    this.cityName = cityName;
  }

}
