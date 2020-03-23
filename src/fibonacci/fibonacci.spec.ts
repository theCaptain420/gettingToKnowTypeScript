import fibonnaciLastNumber from './fibonacci'

test("is the fibonacci of 3 this one?", ()=>{
    expect(fibonnaciLastNumber(10)).toBe(89)
})