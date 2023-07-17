class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));
  }
}

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class ASC implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class DESC implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

(function () {
  const desc = new DESC();
  const context = new Context(desc);
  context.doSomeBusinessLogic();
  const asc = new ASC();
  context.setStrategy(asc);
  context.doSomeBusinessLogic();
})();
