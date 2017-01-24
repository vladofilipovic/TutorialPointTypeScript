var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Root = (function () {
    function Root() {
    }
    return Root;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = (function (_super) {
    __extends(Leaf, _super); //indirectly inherits from Root by virtue of inheritance
    function Leaf() {
        return _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child //indirectly inherits from Root by virtue of inheritance
));
var list = new Leaf();
list.str = "hello";
console.log(list.str);
//# sourceMappingURL=zad04-nasledjivanje-2.js.map