var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.render = function () {
        return "Target: The default target's behavior.";
    };
    return Component;
}());
var uglyJSON = /** @class */ (function () {
    function uglyJSON() {
    }
    uglyJSON.prototype.specificRequest = function () {
        return ".eetpadA eht fo roivaheb laicepS";
    };
    return uglyJSON;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.render = function () {
        var result = this.adaptee.specificRequest().split("").reverse().join("");
        return "Adapter: (TRANSLATED) ".concat(result);
    };
    return Adapter;
}(Component));
(function () {
    var adapter = new Adapter(new uglyJSON());
    console.log(adapter.render());
})();
