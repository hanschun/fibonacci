export class Cache {
    cache: Record<number, number>;

    constructor() {
        this.cache = {};
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