import bigInt from 'big-integer';
import { PrimeNumber } from './PrimeNumber';
import { EulerToient } from './EulerToient';

interface RSAKey {
    key: number;
    n: number;
}

export class RSA {
    primeNum1: number = 0;
    primeNum2: number = 0;
    productOfPrime: number = 0;
    publicKey: number = 0;
    privateKey: number = 0;

    constructor(maxLimit: number) {
        this.primeNum1 = PrimeNumber.getRandomPrimeNumber(maxLimit);
        this.primeNum2 = PrimeNumber.getRandomPrimeNumber(maxLimit);
    }

    private computePublicKey() {
        this.productOfPrime = (this.primeNum1 - 1) * (this.primeNum2 - 1);
        this.publicKey = EulerToient.getCoPrime(this.productOfPrime)[0];
    }

    getPublicKey(): RSAKey {
        this.computePublicKey();
        const key = this.publicKey;
        const n = this.primeNum1 * this.primeNum2;
        return { key, n };
    }

    private computePrivateKey() {
        let i = 1;
        while (true) {
            this.privateKey = (this.productOfPrime * i + 1) / this.publicKey;
            i++;
            if (Number.isInteger(this.privateKey)) {
                break;
            }
        }
    }

    encrypt(plainText: number, publicKey: number, n: number) {
        let cipherText;
        if (plainText > n) {
            return -1;
        }
        cipherText = bigInt(plainText).pow(publicKey).mod(n);
        return parseFloat(cipherText.toString());
    }

    decrypt(cipherText: number) {
        this.computePrivateKey();
        let plainText;
        plainText = bigInt(cipherText)
            .pow(this.privateKey)
            .mod(this.primeNum1 * this.primeNum2);
        return parseFloat(plainText.toString());
    }
}
