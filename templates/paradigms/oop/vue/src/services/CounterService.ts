import { reactive, computed } from 'vue';

export class CounterService {
  private state = reactive({ count: 0 });

  readonly count = computed(() => this.state.count);
  readonly doubleCount = computed(() => this.state.count * 2);

  constructor(private initialValue = 0) {
    this.state.count = initialValue;
  }

  increment(): void {
    this.state.count++;
  }

  decrement(): void {
    this.state.count--;
  }

  reset(): void {
    this.state.count = this.initialValue;
  }
}

export const counterService = new CounterService();
