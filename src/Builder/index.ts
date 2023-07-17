interface Builder {
  reset(): void;
  setHeader(): void;
  setContent(): void;
  setFooter(): void;
}

class ModalBuilder implements Builder {
  private modal: Modal;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.modal = new Modal();
  }

  public setHeader(): void {
    this.modal.parts.push("header");
  }

  public setContent(): void {
    this.modal.parts.push("content");
  }

  public setFooter(): void {
    this.modal.parts.push("footer");
  }

  public getModal(): Modal {
    const result = this.modal;
    this.reset();
    return result;
  }
}

class Modal {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Modal parts: ${this.parts.join(", ")}\n`);
  }
}

class Director {
  public buildMinimalModal(builder: Builder) {
    builder.setContent();
  }

  public buildModal(builder: Builder) {
    builder.setHeader();
    builder.setContent();
    builder.setFooter();
  }
}

(function () {
  const builder = new ModalBuilder();
  const director = new Director();
  director.buildMinimalModal(builder);
  const minimalBuilder = builder.getModal();
  minimalBuilder.listParts();
})();
