"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrimeNumber {
    isPrime(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0)
                return false;
        }
        return number > 1;
    }
    getPrimeNumbers(maxLimit) {
        let primeNumbers = [];
        for (let i = 2; i < maxLimit; i++) {
            if (this.isPrime(i)) {
                primeNumbers.push(i);
            }
        }
        return primeNumbers;
    }
    getRandomPrimeNumber(maxLimit) {
        const primeNumbers = this.getPrimeNumbers(maxLimit);
        const randomIndex = Math.floor(Math.random() * (primeNumbers.length - 0) + 0);
        return this.getPrimeNumbers(maxLimit)[randomIndex];
    }
}
exports.PrimeNumber = PrimeNumber;
