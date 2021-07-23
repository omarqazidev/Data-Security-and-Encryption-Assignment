"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const big_integer_1 = __importDefault(require("big-integer"));
const PrimeNumber_1 = require("./PrimeNumber");
const EulerToient_1 = require("./EulerToient");
class RSA {
    constructor(maxLimit) {
        this.primeNum1 = 0;
        this.primeNum2 = 0;
        this.productOfPrime = 0;
        this.publicKey = 0;
        this.privateKey = 0;
        this.primeNum1 = PrimeNumber_1.PrimeNumber.getRandomPrimeNumber(maxLimit);
        this.primeNum2 = PrimeNumber_1.PrimeNumber.getRandomPrimeNumber(maxLimit);
    }
    computePublicKey() {
        this.productOfPrime = (this.primeNum1 - 1) * (this.primeNum2 - 1);
        this.publicKey = EulerToient_1.EulerToient.getCoPrime(this.productOfPrime)[0];
    }
    getPublicKey() {
        this.computePublicKey();
        const key = this.publicKey;
        const n = this.primeNum1 * this.primeNum2;
        return { key, n };
    }
    computePrivateKey() {
        let i = 1;
        while (true) {
            this.privateKey = (this.productOfPrime * i + 1) / this.publicKey;
            i++;
            if (Number.isInteger(this.privateKey)) {
                break;
            }
        }
    }
    encrypt(plainText, publicKey, n) {
        let cipherText;
        if (plainText > n) {
            return -1;
        }
        cipherText = big_integer_1.default(plainText).pow(publicKey).mod(n);
        return parseFloat(cipherText.toString());
    }
    decrypt(cipherText) {
        this.computePrivateKey();
        let plainText;
        plainText = big_integer_1.default(cipherText)
            .pow(this.privateKey)
            .mod(this.primeNum1 * this.primeNum2);
        return parseFloat(plainText.toString());
    }
}
exports.RSA = RSA;
