type Listener = () => void;

export class CounterService {
  private count: number;
  private listeners = new Set<Listener>();

  constructor(private initialValue = 0) {
    this.count = initialValue;
  }

  getCount(): number {
    return this.count;
  }

  increment(): void {
    this.count++;
    this.notify();
  }

  decrement(): void {
    this.count--;
    this.notify();
  }

  reset(): void {
    this.count = this.initialValue;
    this.notify();
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    this.listeners.forEach((fn) => fn());
  }
}

export const counterService = new CounterService();
