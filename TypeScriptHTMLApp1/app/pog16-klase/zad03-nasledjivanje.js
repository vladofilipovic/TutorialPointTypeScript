var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () { console.log("Area of the circle: " + this.Area); };
    return Circle;
}(Shape));
var krug = new Circle(223);
krug.disp();
//# sourceMappingURL=zad03-nasledjivanje.js.map