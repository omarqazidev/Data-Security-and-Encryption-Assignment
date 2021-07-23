import bigInt from 'big-integer';

export class PrimitiveRoot {
    static getPrimitiveRoots(primeNumber: number) {
        let values: number[] = [];
        let duplicates: boolean = false;
        let primitiveRoots: number[] = [];

        for (let i = 1; i < primeNumber; i++) {
            for (let j = 0; j < primeNumber - 1; j++) {
                duplicates = false;

                let x = bigInt(i).pow(j);
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
                } else {
                    primitiveRoots.push(i);
                }
            }
            values = [];
        }
        return primitiveRoots;
    }

    static getRandomPrimitiveRoot(primeNumber: number) {
        let values: number[] = this.getPrimitiveRoots(primeNumber);
        const randomIndex = Math.floor(Math.random() * (values.length - 0) + 0);
        return values[randomIndex];
    }

    private static hasDuplicates(numbersArray: number[]): boolean {
        return new Set(numbersArray).size !== numbersArray.length;
    }

    private static numericSorter(num1: number, num2: number) {
        return num1 - num2;
    }

    private static isCorrect(arrayToCheck: number[], primeNumber: number) {
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
