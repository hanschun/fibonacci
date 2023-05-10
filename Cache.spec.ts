import { Cache } from "./Cache";

describe('Cache', () => {
    it('should instantiate a new empty cache', () => {
        const cache = new Cache();
        expect(cache.cache).toEqual({});
    });

    it('should set a value to the cache', () => {
        const cache = new Cache();
        cache.setValue(0, 0);
        expect(cache.cache[0]).toBe(0);
    });

    it('should throw if requested value does not exist', () => {
        const cache = new Cache();
        expect(() => {
            cache.getValue(0);
        }).toThrowError("not found");
    });
});