import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private readonly _count = signal(0);

  readonly count = this._count.asReadonly();
  readonly doubleCount = computed(() => this._count() * 2);

  increment(): void {
    this._count.update((c) => c + 1);
  }

  decrement(): void {
    this._count.update((c) => c - 1);
  }

  reset(): void {
    this._count.set(0);
  }
}
