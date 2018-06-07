class Negociacao {
  // antigo construtor
  //   constructor(data, quantidade, valor) {
  //     this._data = new Date(data.getTime());
  //     this._quantidade = quantidade;
  //     this._valor = valor;
  //     Object.freeze(this); //congelar a instância objeto
  //   }

  constructor(_data, _quantidade, _valor) {
    Object.assign(this, { _quantidade, _valor });
    this._data = new Date(_data.getTime());
    Object.freeze(this);
  }
  //	código	posterior	omitido
  get volume() {
    return this._quantidade * this._valor;
  }
  get data() {
    return new Date(this._data.getTime());
  }
  get quantidade() {
    return this._quantidade;
  }
  get valor() {
    return this._valor;
  }
}
