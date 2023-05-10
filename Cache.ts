import { Store } from "./Store";

export class Cache implements Store {
    cache: Record<number, number>;

    constructor() {
        this.cache = {};
    }
    
    isEmpty(): boolean {
        return Object.keys(this.cache).length === 0;
    }

    getValue(input: number): number {
        if (!this.cache[input]) {
            throw Error("not found");
        }
        return this.cache[input];
    }

    setValue(input: number, value: number): void {
        this.cache[input] = value;
    }
}