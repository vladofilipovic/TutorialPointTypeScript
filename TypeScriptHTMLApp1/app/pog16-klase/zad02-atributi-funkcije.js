var Auto = (function () {
    //constructor
    function Auto(engine) {
        this.engine = engine;
    }
    //function
    Auto.prototype.disp = function () {
        console.log("Function displays Engine is : " + this.engine);
    };
    return Auto;
}());
//create an object
var obj = new Auto("XXSY1");
//access the field
console.log("Reading attribute value Engine as : " + obj.engine);
//access the function
obj.disp();
//# sourceMappingURL=zad02-atributi-funkcije.js.map