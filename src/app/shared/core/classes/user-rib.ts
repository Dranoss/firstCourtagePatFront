export class UserRib {
  public id?: number;
  public ibanNumber: string;
  public bicCode: string;
  public ownerName: string;
  public bankName: string;

  constructor(ibanNumber: string, bicCode: string, ownerName: string, bankName: string, id?: number ){
    this.id = id;
    this.ibanNumber = ibanNumber;
    this.bicCode = bicCode;
    this.ownerName = ownerName;
    this.bankName = bankName;
  }

}
