"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EulerToient {
    static eulersToient(number) {
        if (primeNumbers.includes(number)) {
            return number - 1;
        }
        let values = [];
        for (let i = 1; i < number; i++) {
            if (this.gcd(i, number) === 1) {
                values.push(i);
            }
        }
        // values = [1, ...values];
        return values.length;
    }
    static eulersToientAndMultiply(num1, num2) {
        let p;
        let q;
        if (primeNumbers.includes(num1)) {
            p = num1 - 1;
        }
        else {
            p = this.eulersToient(num1);
        }
        if (primeNumbers.includes(num2)) {
            q = num2 - 1;
        }
        else {
            q = this.eulersToient(num2);
        }
        return p * q;
    }
    static gcd(a, b) {
        if (!b) {
            return a;
        }
        return this.gcd(b, a % b);
    }
    static gcd_rec(a, b) {
        if (b) {
            return this.gcd_rec(b, a % b);
        }
        else {
            return Math.abs(a);
        }
    }
    static getCoPrime(num) {
        let values = [];
        for (let i = 2; i < num; i++) {
            if (this.gcd_rec(num, i) === 1) {
                values.push(i);
            }
        }
        return values;
    }
}
exports.EulerToient = EulerToient;
const primeNumbers = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
    503,
    509,
    521,
    523,
    541,
    547,
    557,
    563,
    569,
    571,
    577,
    587,
    593,
    599,
    601,
    607,
    613,
    617,
    619,
    631,
    641,
    643,
    647,
    653,
    659,
    661,
    673,
    677,
    683,
    691,
    701,
    709,
    719,
    727,
    733,
    739,
    743,
    751,
    757,
    761,
    769,
    773,
    787,
    797,
    809,
    811,
    821,
    823,
    827,
    829,
    839,
    853,
    857,
    859,
    863,
    877,
    881,
    883,
    887,
    907,
    911,
    919,
    929,
    937,
    941,
    947,
    953,
    967,
    971,
    977,
    983,
    991,
    997,
    1009,
];