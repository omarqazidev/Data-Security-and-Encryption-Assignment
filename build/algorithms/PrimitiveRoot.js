"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const big_integer_1 = __importDefault(require("big-integer"));
class PrimitiveRoot {
    static getPrimitiveRoots(primeNumber) {
        let values = [];
        let duplicates = false;
        let primitiveRoots = [];
        for (let i = 1; i < primeNumber; i++) {
            for (let j = 0; j < primeNumber - 1; j++) {
                duplicates = false;
                let x = big_integer_1.default(i).pow(j);
                let y = x.mod(primeNumber);
                values.push(parseInt(y.toString()));
                if (this.hasDuplicates(values) === true) {
                    duplicates = true;
                    break;
                }
            }
            if (duplicates === false) {
                if (!this.isCorrect(values, primeNumber)) {
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
    static getRandomPrimitiveRoot(primeNumber) {
        let values = this.getPrimitiveRoots(primeNumber);
        const randomIndex = Math.floor(Math.random() * (values.length - 0) + 0);
        return values[randomIndex];
    }
    static hasDuplicates(numbersArray) {
        return new Set(numbersArray).size !== numbersArray.length;
    }
    static numericSorter(num1, num2) {
        return num1 - num2;
    }
    static isCorrect(arrayToCheck, primeNumber) {
        if (arrayToCheck.length >= primeNumber) {
            return false;
        }
        arrayToCheck = arrayToCheck.sort(this.numericSorter);
        for (let i = 1; i < primeNumber - 1; i++) {
            if (arrayToCheck[i - 1] !== i) {
                return false;
            }
        }
        return true;
    }
}
exports.PrimitiveRoot = PrimitiveRoot;
