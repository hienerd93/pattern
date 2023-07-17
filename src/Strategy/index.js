var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.doSomeBusinessLogic = function () {
        console.log("Context: Sorting data using the strategy (not sure how it'll do it)");
        var result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
        console.log(result.join(","));
    };
    return Context;
}());
var ASC = /** @class */ (function () {
    function ASC() {
    }
    ASC.prototype.doAlgorithm = function (data) {
        return data.sort();
    };
    return ASC;
}());
var DESC = /** @class */ (function () {
    function DESC() {
    }
    DESC.prototype.doAlgorithm = function (data) {
        return data.reverse();
    };
    return DESC;
}());
(function () {
    var desc = new DESC();
    var context = new Context(desc);
    context.doSomeBusinessLogic();
    var asc = new ASC();
    context.setStrategy(asc);
    context.doSomeBusinessLogic();
})();
