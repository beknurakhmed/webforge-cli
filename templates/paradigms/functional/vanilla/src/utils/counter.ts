type Listener = () => void;

export function createCounter(initialValue = 0) {
  let count = initialValue;
  const listeners = new Set<Listener>();

  const subscribe = (fn: Listener) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
  };

  const notify = () => listeners.forEach((fn) => fn());

  const getCount = () => count;
  const increment = () => { count++; notify(); };
  const decrement = () => { count--; notify(); };
  const reset = () => { count = initialValue; notify(); };

  return { getCount, increment, decrement, reset, subscribe };
}
