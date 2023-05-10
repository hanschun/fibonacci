export interface Store {
    isEmpty(): boolean;
    getValue(index: number): number;
    setValue(index: number, value: number): void;
}