import { writable } from 'svelte/store';

export const dogStore = writable({});



// derived store
import { derived } from 'svelte/store';

const items = [
  { name: 'pencil', cost: 0.5 },
  { name: 'backpack', cost: 40 }
];
export const itemsStore = writable(items);

export const taxStore = writable(0.08);

export const itemsWithTaxStore = derived(
  [itemsStore, taxStore],
  ([$itemsStore, $taxStore]) => {
    const tax = 1 + $taxStore;
    return $itemsStore.map(item => ({ ...item, total: item.cost * tax }));
  }
);



// store with class example
import Line from './line';
import Point from './point';

export const pointStore = writable(new Point(0, 0));

export const lineStore =
  writable(new Line(new Point(0, 0), new Point(0, 0)));



// store with persistence to sessionStorage
import {writableSession} from './store-util';
export const numbers = writableSession('numbers', [1, 2, 3]);