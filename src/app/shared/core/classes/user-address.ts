export class UserAddress {
  public id?: number;
  public streetName: string;
  public zipCode: string;
  public cityName: string;

  constructor(streetName: string, zipCode: string, cityName: string, id?: number ){
    this.id = id;
    this.streetName = streetName;
    this.zipCode = zipCode;
    this.cityName = cityName;
  }

}
