var Car = (function () {
    //constructor
    function Car(engine) {
        this.engine = engine;
    }
    //function
    Car.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    return Car;
}());
var auto1 = new Car("Engine 1");
var auto2 = new Car("Engine 2");
//# sourceMappingURL=zad01-deklaracija-kreiranje.js.map