import { Hasher } from './algorithms/Hasher';
import { PrimeNumber, PrimitiveRoot, DiffieHellman, RSA } from './algorithms';

// console.clear();
// console.log('================================================================================');
// console.log('\t\t\t Diffie Hellman');
// console.log('================================================================================\n');

// const randomPrimeNumber = PrimeNumber.getRandomPrimeNumber(100);
// const randomPrimitiveRoot = PrimitiveRoot.getRandomPrimitiveRoot(randomPrimeNumber);

// const aliceDiffieHellman = new DiffieHellman(randomPrimeNumber, randomPrimitiveRoot);
// const bobDiffieHellman = new DiffieHellman(randomPrimeNumber, randomPrimitiveRoot);

// const alicePublicKey = aliceDiffieHellman.getPublicKey();
// const bobPublicKey = bobDiffieHellman.getPublicKey();

// const aliceSecretKey = aliceDiffieHellman.generateSharedKey(bobPublicKey);
// const bobSecretKey = bobDiffieHellman.generateSharedKey(alicePublicKey);

// console.log(
//     'Both Alice and Bob have the same private/shared key:\t',
//     aliceDiffieHellman.doesPrivateKeysMatch(bobDiffieHellman.getPrivateKey())
// );

// console.log('\n');
// console.table({ aliceDiffieHellman, bobDiffieHellman });

// console.log(
//     '\n\n================================================================================\n'
// );

console.clear();
console.log('================================================================================');
console.log('\t\t\t RSA (Rivest–Shamir–Adleman)');
console.log('================================================================================\n');

const aliceRSA = new RSA(100);
const bobRSA = new RSA(100);

const aliceRSAPublicKey = aliceRSA.getPublicKey();
const bobRSAPublicKey = bobRSA.getPublicKey();

const plaintText = 31;
console.log('Plain Text:\t', plaintText);

const encryptedData = bobRSA.encrypt(plaintText, aliceRSAPublicKey.key, aliceRSAPublicKey.n);
console.log('Encrypted Text:\t', encryptedData);

let decryptedData = aliceRSA.decrypt(encryptedData);
console.log('Decrypted Text:\t', decryptedData);

console.log('\n');
console.table({ aliceRSA, bobRSA });

console.log(
    '\n\n================================================================================\n'
);

// console.clear();
// console.log('======================================================================');
// console.log('\t\t MD5 (Message Digest 5)');
// console.log('======================================================================\n');

// const stringToHash = 'Omar Qazi';
// console.log('Orignal Text:\t\t', stringToHash);

// const sha1Hash = Hasher.textToMd5(stringToHash);
// console.log('Hashed with MD5:\t', sha1Hash);

// console.log('\n======================================================================\n');

//console.log('Hashed with MD5:\t', Hasher.textToMd5(stringToHash));

// console.clear();
// console.log('================================================================================');
// console.log('\t\t\t SHA-1 (Secure Hashing Algorithm 1)');
// console.log('================================================================================\n');

// const stringToHash = 'Omar Qazi';

// const sha1Hash = Hasher.textToMd5(stringToHash);
// console.log('Hashed with MD5:\t', sha1Hash);

// console.log(
//     '\n\n================================================================================\n'
// );
