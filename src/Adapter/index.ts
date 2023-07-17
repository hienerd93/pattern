class Component {
  public render(): string {
    return "Target: The default target's behavior.";
  }
}

class uglyJSON {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

class Adapter extends Component {
  private adaptee: uglyJSON;

  constructor(adaptee: uglyJSON) {
    super();
    this.adaptee = adaptee;
  }

  public render(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

(function () {
  const adapter = new Adapter(new uglyJSON());
  console.log(adapter.render());
})();
