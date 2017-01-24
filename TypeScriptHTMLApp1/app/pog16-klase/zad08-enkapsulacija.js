var Encapsulate = (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var enc = new Encapsulate();
console.log(enc.str); //accessible
// console.log(enc.str2) //compilation Error as str2 is private 
//# sourceMappingURL=zad08-enkapsulacija.js.map