var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PrinterClass = (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () { console.log("doPrint() from Parent called…"); };
    return PrinterClass;
}());
var StringPrinter = (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("doPrint() is printing a string…");
    };
    return StringPrinter;
}(PrinterClass));
var stampac = new StringPrinter();
stampac.doPrint();
//# sourceMappingURL=zad05-prevazilazenje-metoda.js.map