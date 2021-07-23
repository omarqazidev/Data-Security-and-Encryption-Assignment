import crypto from 'crypto';

console.clear();
console.log('=====================================================');
console.log('');

const alice = crypto.getDiffieHellman('modp15');
const bob = crypto.getDiffieHellman('modp15');

// console.log(alice.getPrime().toString('hex'));

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey().toString('hex'), 'hex', 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey().toString('hex'), 'hex', 'hex');

console.log(aliceSecret === bobSecret);

//============================================================================================================

import { Hasher } from './algorithms/Hasher';
import { RSA } from './algorithms/RSA';
import { DiffieHellman } from './algorithms/DiffieHellman';
import bigInt from 'big-integer';
import { PrimitiveRoot } from './algorithms/PrimitiveRoot';
import { EulerToient } from './algorithms/EulerToient';

console.clear();
// console.log('\n\n ========================== DiffieHellman Algorithm ========================== ');

// const alice = new DiffieHellman();
// const bob = new DiffieHellman();

// alice.generateKeys();
// bob.generateKeys();

// alice.computeSecret(bob.getPublicKey());
// console.log('\nAlice Secret:\n', alice.getSecret());

// bob.computeSecret(alice.getPublicKey());
// console.log('\nBob Secret:\n', alice.getSecret());

// console.log('\nBoth Secrets Match:\n', alice.matchSecrets(bob.getSecret()));

// console.log('\n\n ========================== RSA Algorithm ========================== ');

// const aliceRSA = new RSA();
// const bobRSA = new RSA();

// const aliceData = 'Hi, my name is Alice.';
// const encryptedAliceData = aliceRSA.encrypt(aliceData, bobRSA.getPublicKey());
// console.log('\nEncrypted Data:\n', encryptedAliceData.toString('hex'));

// const dencryptedAliceData = bobRSA.decrypt(encryptedAliceData);
// console.log('\nDecrypted Data:\n', dencryptedAliceData.toString());
console.clear();
console.log('=================================================');
// for (let i = 0; i < 52; i++) {
//     let x = bigInt(3).pow(i);
//     let y = x.mod(53);
//     console.log(`3 ^ ${i} % 53 = `, y.toString());
// }

// const dh = new DiffiHellman(97);
// console.log(dh.getPrimitiveRoot());

// console.log(getPrimitiveRoot(23));

// const aliceDH = new DiffieHellman(7, 3);
// const bobDH = new DiffieHellman(7, 3);

// const alicePublicKey = aliceDH.getPublicKey();
// const bobPublicKey = bobDH.getPublicKey();

// const aliceSecretKey = aliceDH.getSharedKey(bobPublicKey);
// const bobSecretKey = bobDH.getSharedKey(alicePublicKey);

// console.log(aliceSecretKey, bobSecretKey);

// console.log({ aliceDH });
// console.log({ bobDH });

// console.log(eulersToientFunction(3233));
// console.log(eulersToientFunctionAndMultiply(61, 53));
// console.log(getCoPrime(3120));

// const rsa = new RSA(200);

// rsa.computePublicKey();
// rsa.computePrivateKey();

// let encryptedData = rsa.encrypt(13, 13, 143);
// console.log(encryptedData);

// let decryptedData = rsa.decrypt(encryptedData);
// console.log(decryptedData);

// console.log(rsa);

// const aliceRSA = new RSA(100);
// const bobRSA = new RSA(100);

// const aliceRSAPublicKey = aliceRSA.getPublicKey();
// const bobRSAPublicKey = bobRSA.getPublicKey();

// const plaintText = 5;
// console.log('Plain Text:\t', plaintText);

// const encryptedData = bobRSA.encrypt(plaintText, aliceRSAPublicKey.key, aliceRSAPublicKey.n);
// console.log('Encrypted Text:\t', encryptedData);

// let decryptedData = aliceRSA.decrypt(encryptedData);
// console.log('Decrypted Text:\t', decryptedData);

// console.log();
// console.table({ aliceRSA, bobRSA });
// console.log('=================================================');

const stringToHash = 'Omar';
console.log('Hashed with SHA-1:\t', Hasher.textToSha1(stringToHash));
console.log('Hashed with MD5:\t', Hasher.textToMd5(stringToHash));
