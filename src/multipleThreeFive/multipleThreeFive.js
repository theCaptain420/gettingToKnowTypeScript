"use strict";
exports.__esModule = true;
var displayMessage;
displayMessage = "hello";
console.log(displayMessage);
function totalSumDividedByNumbers(from, to, num1, num2) {
    var finalNumberSum;
    finalNumberSum = 0;
    for (var i = from; i < to; i++) {
        if (i % num1 == 0) {
            finalNumberSum += i;
        }
        else if (i % num2 == 0) {
            finalNumberSum += i;
        }
    }
    return finalNumberSum;
}
exports["default"] = totalSumDividedByNumbers;
console.log(totalSumDividedByNumbers(0, 1000, 3, 5));
