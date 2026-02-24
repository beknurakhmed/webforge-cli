export class CounterService {
  private _count: number;

  constructor(private initialValue = 0) {
    this._count = initialValue;
  }

  get count(): number {
    return this._count;
  }

  get doubleCount(): number {
    return this._count * 2;
  }

  increment(): void {
    this._count++;
  }

  decrement(): void {
    this._count--;
  }

  reset(): void {
    this._count = this.initialValue;
  }
}

export const counterService = new CounterService();
