interface Button {
  paint(): void;
}

interface Checkbox {
  paint(): void;
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements GUIFactory {
  public createButton(): Button {
    return new WinButton();
  }

  public createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {
  public createButton(): Button {
    return new MacButton();
  }

  public createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

class WinButton implements Button {
  public paint() {
    console.log("render WinButton");
  }
}

class MacCheckbox implements Checkbox {
  public paint() {
    console.log("render MacCheckbox");
  }
}

class MacButton implements Button {
  public paint() {
    console.log("render MacButton");
  }
}

class WinCheckbox implements Checkbox {
  public paint() {
    console.log("render WinCheckBox");
  }
}
