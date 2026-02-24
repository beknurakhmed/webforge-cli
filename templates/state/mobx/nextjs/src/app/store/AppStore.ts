import { makeAutoObservable } from 'mobx';

class AppStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() { this.count++; }
  decrement() { this.count--; }
  reset() { this.count = 0; }
}

export const appStore = new AppStore();
