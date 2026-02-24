import { signal, computed } from '@angular/core';

export function createCounter(initialValue = 0) {
  const count = signal(initialValue);
  const doubleCount = computed(() => count() * 2);

  const increment = () => count.update((c) => c + 1);
  const decrement = () => count.update((c) => c - 1);
  const reset = () => count.set(initialValue);

  return { count, doubleCount, increment, decrement, reset };
}
