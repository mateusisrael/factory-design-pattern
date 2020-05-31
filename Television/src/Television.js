class Television {
    constructor(model) {
      this._model = `Toshiba ${model}`;
    }
    get model() {
      return this._model;
    }
     set model(x) {
      this._model = `Nova Toshiba ${x}`;
    }
}

module.exports = {
    Television,
}