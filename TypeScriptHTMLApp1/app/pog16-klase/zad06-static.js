var StaticMem = (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is" + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // initialize the static variable
StaticMem.disp(); // invoke the static method
//# sourceMappingURL=zad06-static.js.map