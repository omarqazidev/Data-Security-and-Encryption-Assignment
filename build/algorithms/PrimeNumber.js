"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrimeNumber {
    static isPrime(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0)
                return false;
        }
        return number > 1;
    }
    static getPrimeNumbers(maxLimit) {
        let primeNumbers = [];
        for (let i = 2; i < maxLimit; i++) {
            if (this.isPrime(i)) {
                primeNumbers.push(i);
            }
        }
        return primeNumbers;
    }
    static getRandomPrimeNumber(maxLimit) {
        const primeNumbers = this.getPrimeNumbers(maxLimit);
        const randomIndex = Math.floor(Math.random() * (primeNumbers.length - 0) + 0);
        return this.getPrimeNumbers(maxLimit)[randomIndex];
    }
}
exports.PrimeNumber = PrimeNumber;
