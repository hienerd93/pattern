var WinFactory = /** @class */ (function () {
    function WinFactory() {
    }
    WinFactory.prototype.createButton = function () {
        return new WinButton();
    };
    WinFactory.prototype.createCheckbox = function () {
        return new WinCheckbox();
    };
    return WinFactory;
}());
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createButton = function () {
        return new MacButton();
    };
    MacFactory.prototype.createCheckbox = function () {
        return new MacCheckbox();
    };
    return MacFactory;
}());
var WinButton = /** @class */ (function () {
    function WinButton() {
    }
    WinButton.prototype.paint = function () {
        console.log("render WinButton");
    };
    return WinButton;
}());
var MacCheckbox = /** @class */ (function () {
    function MacCheckbox() {
    }
    MacCheckbox.prototype.paint = function () {
        console.log("render MacCheckbox");
    };
    return MacCheckbox;
}());
var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.paint = function () {
        console.log("render MacButton");
    };
    return MacButton;
}());
var WinCheckbox = /** @class */ (function () {
    function WinCheckbox() {
    }
    WinCheckbox.prototype.paint = function () {
        console.log("render WinCheckBox");
    };
    return WinCheckbox;
}());
(function () {
    var factory = new MacFactory();
    var macCheckbox = factory.createCheckbox();
    var macButton = factory.createButton();
    macCheckbox.paint();
})();
