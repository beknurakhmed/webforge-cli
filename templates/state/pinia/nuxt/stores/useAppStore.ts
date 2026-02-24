import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() { this.count++; },
    decrement() { this.count--; },
    reset() { this.count = 0; },
  },
});
