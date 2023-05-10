import { Table } from './Table'

describe('Table', () => {
    it('should be empty when instantiated', () => {
        const table = new Table();
        expect(table.isEmpty()).toBe(true);
    });

    it('should throw when index is not found in table', () => {
        const table = new Table();
        expect(() => {
            table.getValue(0);
        }).toThrowError("not found");
    });

    it('should get a set value from the table', () => {
        const table = new Table();
        table.setValue(0, 0);
        expect(table.getValue(0)).toBe(0);
    });
});