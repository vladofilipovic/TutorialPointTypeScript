var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var pozdrav = new Greeting();
pozdrav.greet();
//# sourceMappingURL=zad03-objekti.js.map