var ModalBuilder = /** @class */ (function () {
    function ModalBuilder() {
        this.reset();
    }
    ModalBuilder.prototype.reset = function () {
        this.modal = new Modal();
    };
    ModalBuilder.prototype.setHeader = function () {
        this.modal.parts.push("header");
    };
    ModalBuilder.prototype.setContent = function () {
        this.modal.parts.push("content");
    };
    ModalBuilder.prototype.setFooter = function () {
        this.modal.parts.push("footer");
    };
    ModalBuilder.prototype.getModal = function () {
        var result = this.modal;
        this.reset();
        return result;
    };
    return ModalBuilder;
}());
var Modal = /** @class */ (function () {
    function Modal() {
        this.parts = [];
    }
    Modal.prototype.listParts = function () {
        console.log("Modal parts: ".concat(this.parts.join(", "), "\n"));
    };
    return Modal;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.buildMinimalModal = function (builder) {
        builder.setContent();
    };
    Director.prototype.buildModal = function (builder) {
        builder.setHeader();
        builder.setContent();
        builder.setFooter();
    };
    return Director;
}());
(function () {
    var builder = new ModalBuilder();
    var director = new Director();
    director.buildMinimalModal(builder);
    var minimalBuilder = builder.getModal();
    minimalBuilder.listParts();
})();
