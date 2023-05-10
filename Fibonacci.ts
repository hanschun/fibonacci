import { Cache } from "./Cache";

export class Fibonacci {
    cache: Cache;

    constructor() {
        this.cache = new Cache();
    }

    getTerm(index: number): number {
        if (index <= 1) {
            return index;
        }
        const value = this.getTerm(index -1) + this.getTerm(index - 2);
        this.cacheValue(index, value);
        return value;
    }

    cacheValue(index: number, value: number): void {
        this.cache.setValue(index, value);
    }
}