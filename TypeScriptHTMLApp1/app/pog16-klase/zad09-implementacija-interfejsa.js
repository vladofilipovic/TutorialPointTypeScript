var AgriLoan = (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var zajam = new AgriLoan(10, 1);
console.log("Interest is : " + zajam.interest + " Rebate is : " + zajam.rebate);
//# sourceMappingURL=zad09-implementacija-interfejsa.js.map