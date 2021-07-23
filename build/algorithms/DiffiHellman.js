"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const big_integer_1 = __importDefault(require("big-integer"));
class DiffiHellman {
    constructor(primeNumber) {
        this.primeNumber = 0;
        this.primeNumber = primeNumber;
    }
    getPrimitiveRoot() {
        let values = [];
        let hasDuplicates = false;
        let primitiveRoots = [];
        for (let i = 1; i < this.primeNumber; i++) {
            for (let j = 0; j < this.primeNumber - 1; j++) {
                hasDuplicates = false;
                let x = big_integer_1.default(i).pow(j);
                let y = x.mod(this.primeNumber);
                values.push(parseInt(y.toString()));
                if (this.hasDuplicates(values)) {
                    hasDuplicates = true;
                    break;
                }
            }
            if (hasDuplicates === false) {
                if (!this.isCorrect(values)) {
                    continue;
                }
                else {
                    primitiveRoots.push(i);
                }
            }
            values = [];
        }
        return primitiveRoots;
    }
    hasDuplicates(numbersArray) {
        return new Set(numbersArray).size !== numbersArray.length;
    }
    numericSorter(num1, num2) {
        return num1 - num2;
    }
    isCorrect(arrayToCheck) {
        if (arrayToCheck.length >= this.primeNumber) {
            return false;
        }
        arrayToCheck = arrayToCheck.sort(this.numericSorter);
        for (let i = 1; i < this.primeNumber - 1; i++) {
            if (arrayToCheck[i - 1] !== i) {
                return false;
            }
        }
        return true;
    }
}
exports.DiffiHellman = DiffiHellman;
