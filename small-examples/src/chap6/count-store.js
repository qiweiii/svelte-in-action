import { writable } from 'svelte/store';

// an custom store example
const { subscribe, set, update } = writable(0);

export const count = {
  subscribe,
  increment: () => update(n => n + 1),
  decrement: () => update(n => n - 1),
  reset: () => set(0)
};