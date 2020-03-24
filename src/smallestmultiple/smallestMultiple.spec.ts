import smallestMultiple from './smallestMultiple';

test("is 2520 the smallest number that can be diveded by numbers 1 to 10", ()=>{
    expect(smallestMultiple(1,3)).toBe(2520)
})