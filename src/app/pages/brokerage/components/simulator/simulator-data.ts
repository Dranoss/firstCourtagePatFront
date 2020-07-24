export class SimulatorData {

    netIncome = 0;
    rentIncome = 0;
    otherIncome = 0;
    rentExpense = 0;
    loanExpense = 0;
    otherExpense = 0;
    duration = 0;
    rate = 0;
    loanCapacity = 0;
    totalIncome = 0;
    totalExpense = 0;

    constructor() {

    }

    setRate(rate: number) {
        this.rate = rate;
    }

    calculate(){

        let mensualite: number;

        this.totalExpense = this.loanExpense + this.rentExpense + this.otherExpense;
        this.totalIncome = this.netIncome + (this.rentIncome * 0.7) + this.otherIncome;

        mensualite = (this.totalIncome - this.totalExpense) / 3;
        this.loanCapacity = Math.round(mensualite * ( 1 - ( 1 + (this.rate / 100) / 12 )
            ** ( -this.duration * 12) ) / ((this.rate / 100) / 12 ));
    }
}
