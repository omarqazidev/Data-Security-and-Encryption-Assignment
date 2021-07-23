"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DiffiHellman {
    constructor(primeNumber) {
        this.q = 0;
        this.q = primeNumber;
    }
    getPrimitiveRoot() {
        let values = [];
        let hasDuplicates = false;
        let primitiveRoots = [];
        for (let i = 1; i < this.q; i++) {
            for (let j = 0; j < this.q - 1; j++) {
                hasDuplicates = false;
                let x = i ^ j;
                let y = x % this.q;
                values.push(y);
                console.log(`${i}^${j} % ${this.q} = ${y}`);
                if (this.hasDuplicates(values)) {
                    //console.log('HAS DUPLICATES', x);
                    hasDuplicates = true;
                    break;
                }
            }
            // console.table(values);
            if (hasDuplicates === false) {
                console.log(i);
                if (!this.isCorrect(values)) {
                    //console.log('NOT CORRECT');
                    continue;
                }
                else {
                    //console.log('IS CORRECT');
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
        if (arrayToCheck.length >= this.q) {
            return false;
        }
        arrayToCheck = arrayToCheck.sort(this.numericSorter);
        //console.table(arrayToCheck);
        for (let i = 1; i < this.q - 1; i++) {
            // console.log('toCheck: ', arrayToCheck[i]);
            // console.log('i: ', i);
            if (arrayToCheck[i - 1] !== i) {
                return false;
            }
        }
        return true;
    }
}
exports.DiffiHellman = DiffiHellman;
