import { Store } from "./Store";

export class Table implements Store {
    table: number[] = [];

    constructor() {}

    isEmpty(): boolean {
        return this.table.length === 0;
    }

    getValue(index: number): number {
        if (isNaN(this.table[index])) {
            throw Error("not found");
        }
        return this.table[index];
    }

    setValue(index: number, value: number): void {
        this.table[index] = value; 
    }
}