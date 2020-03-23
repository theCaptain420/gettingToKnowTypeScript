"use strict";
//https://projecteuler.net/problem=2
exports.__esModule = true;
function fibonnaciLastNumber(numberOf) {
    var finalNumber = 0;
    var seqOne = 1;
    var seqTwo = 2;
    for (var i = 0; i < numberOf; i++) {
        finalNumber += i;
    }
    return finalNumber;
}
exports["default"] = fibonnaciLastNumber;
console.log(fibonnaciLastNumber(3));
