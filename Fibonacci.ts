import { Cache } from "./Cache";
import { Store } from "./Store";

export class Fibonacci {
    store: Store;

    constructor(store: Store) {
        this.store = store;
    }

    getTerm(index: number): number {
        const value = this.getValue(index);
        this.storeValue(index, value);
        return value;
    }

    getValue(index: number): number {
        let value = 0;
        try {
            value = this.store.getValue(index);
        } catch {
            if (index <= 1) {
                return index;
            }
            value = this.getTerm(index -1) + this.getTerm(index - 2);
        }
        return value;
    }

    storeValue(index: number, value: number): void {
        this.store.setValue(index, value);
    }
}