export class Rib {
  public id?: number;
  public iban: string;
  public bic: string;
  public ownerFullname: string;
  public bankName: string;

  constructor(iban: string, bic: string, ownerFullname: string, bankName: string, id?: number ){
    this.id = id;
    this.iban = iban;
    this.bic = bic;
    this.ownerFullname = ownerFullname;
    this.bankName = bankName;
  }

}
