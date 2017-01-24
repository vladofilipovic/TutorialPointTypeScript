interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number
    rebate: number
    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}

var zajam = new AgriLoan(10, 1)
console.log("Interest is : " + zajam.interest + " Rebate is : " + zajam.rebate)