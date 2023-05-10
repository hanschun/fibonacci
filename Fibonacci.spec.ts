import { Cache } from "./Cache";
import { Fibonacci } from "./Fibonacci";
import { Table } from "./Table";

describe('Fibonacci', () => {
    describe('implementing Cache as Store', () => {
        it('should return a value for a given index that returns without calculation', () => {
            const cache = new Cache();
            const fibonacci = new Fibonacci(cache);
            expect(fibonacci.getTerm(0)).toBe(0);
        });
    
        it('should return a value for a given index that requires calculation', () => {
            const cache = new Cache();
            const fibonacci = new Fibonacci(cache);
            expect(fibonacci.getTerm(2)).toBe(1);
        });
    
        it('should initialize with an empty store', () => {
            const cache = new Cache();
            const fibonacci = new Fibonacci(cache);
            expect(fibonacci.store.isEmpty()).toBe(true);
        });
    
        it('should store a value when index is more than 1', () => {
            const cache = new Cache();
            const fibonacci = new Fibonacci(cache);
            expect(fibonacci.getTerm(2)).toBe(1);
            expect(fibonacci.store.getValue(2)).toBe(1);
        });
    
        it('should not store a value when index is 1 or less', () => {
            const cache = new Cache();
            const fibonacci = new Fibonacci(cache);
            expect(fibonacci.getTerm(1)).toBe(1);
            expect(fibonacci.store.getValue(1)).toBe(1);
        });
    
        it('should store intermediate values for index > 1', () => {
            const expectedTerms = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
            const cache = new Cache();
            const fibonacci = new Fibonacci(cache);
            const max = expectedTerms.length - 1;
            expect(fibonacci.getTerm(max)).toBe(expectedTerms[max]);
            for (let a = 2; a < max; a++) {
                expect(fibonacci.store.getValue(a)).toBe(expectedTerms[a]);
            }
        });
    });

    describe('implementing Table as Store', () => {
        it('should return a value for a given index that returns without calculation', () => {
            const table = new Table();
            const fibonacci = new Fibonacci(table);
            expect(fibonacci.getTerm(0)).toBe(0);
        });
    
        it('should return a value for a given index that requires calculation', () => {
            const table = new Table();
            const fibonacci = new Fibonacci(table);
            expect(fibonacci.getTerm(2)).toBe(1);
        });
    
        it('should initialize with an empty store', () => {
            const table = new Table();
            const fibonacci = new Fibonacci(table);
            expect(fibonacci.store.isEmpty()).toBe(true);
        });
    
        it('should store a value when index is more than 1', () => {
            const table = new Table();
            const fibonacci = new Fibonacci(table);
            expect(fibonacci.getTerm(2)).toBe(1);
            expect(fibonacci.store.getValue(2)).toBe(1);
        });
    
        it('should not store a value when index is 1 or less', () => {
            const table = new Table();
            const fibonacci = new Fibonacci(table);
            expect(fibonacci.getTerm(1)).toBe(1);
            expect(fibonacci.store.getValue(1)).toBe(1);
        });
    
        it('should store intermediate values for index > 1', () => {
            const expectedTerms = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
            const table = new Table();
            const fibonacci = new Fibonacci(table);
            const max = expectedTerms.length - 1;
            expect(fibonacci.getTerm(max)).toBe(expectedTerms[max]);
            for (let a = 2; a < max; a++) {
                expect(fibonacci.store.getValue(a)).toBe(expectedTerms[a]);
            }
        });
    });
});