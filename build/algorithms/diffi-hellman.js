"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DiffiHellman {
    constructor(primeNumber) {
        this.q = 0;
        this.q = primeNumber;
    }
    getPrimitiveRoot() {
        let values = [];
        for (let i = 1; i < this.q; i++) {
            for (let j = 1; j < this.q; j++) {
                values.push(Math.pow(3, 1) % this.q);
                if (this.hasDuplicates(values)) {
                    return 0;
                }
            }
            if (!this.isCorrect(values)) {
                return 0;
            }
            return i;
        }
    }
    hasDuplicates(numbersArray) {
        return new Set(numbersArray).size !== numbersArray.length;
    }
    isCorrect(arrayToCheck) {
        let sumOfSequence = 0;
        let sumOfArrayToCheck = 0;
        for (let i = 1; i < this.q; i++) {
            sumOfSequence = sumOfSequence + i;
        }
        for (let j = 1; j < arrayToCheck.length; j++) {
            sumOfArrayToCheck = sumOfArrayToCheck + j;
        }
        if (sumOfSequence !== sumOfArrayToCheck) {
            return false;
        }
        return true;
    }
}
exports.DiffiHellman = DiffiHellman;
