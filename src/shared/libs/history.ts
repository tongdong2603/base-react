import { History as H } from 'history';

class History {
  private _history!: H;

  get history(): H {
    return this._history;
  }

  set history(history: H) {
    this._history = history;
  }
}

export default new History();
