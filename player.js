export default class Player {
  get id() {
    return this._id;
  }

  constructor(id = null) {
    this._id = id;
  }
}
