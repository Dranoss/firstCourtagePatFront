export class Projectstatus {
id?: number;
name: string;
ranking: number;

constructor(  name: string,
  ranking: number,
  id?: number){

    this.id = id;
    this.name = name;
    this.ranking= ranking;
}

}
