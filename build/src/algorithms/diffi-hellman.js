"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PrimeNumber = /** @class */ (function () {
    function PrimeNumber() {
    }
    PrimeNumber.prototype.isPrime = function (number) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0)
                return false;
        }
        return number > 1;
    };
    PrimeNumber.prototype.getPrimeNumbers = function (maxLimit) {
        var primeNumbers = [];
        for (var i = 2; i < maxLimit; i++) {
            if (this.isPrime(i)) {
                primeNumbers = __spreadArrays(primeNumbers, [i]);
            }
        }
        return primeNumbers;
    };
    return PrimeNumber;
}());
exports.PrimeNumber = PrimeNumber;
var DiffiHellman = /** @class */ (function () {
    function DiffiHellman() {
    }
    return DiffiHellman;
}());
exports.DiffiHellman = DiffiHellman;
