"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class RSA {
    constructor() {
        this.keypair = crypto_1.default.generateKeyPairSync('rsa', {
            modulusLength: 2048,
        });
    }
    exportKeys() {
        return (this.keypair.publicKey.export({
            type: 'pkcs1',
            format: 'pem',
        }),
            this.keypair.privateKey.export({
                type: 'pkcs1',
                format: 'pem',
            }));
    }
    getPublicKey() {
        return this.keypair.publicKey;
    }
    getPrivateKey() {
        return this.keypair.privateKey;
    }
    encrypt(data, otherPublicKey) {
        const encryptedData = crypto_1.default.publicEncrypt({
            key: otherPublicKey,
            padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256',
        }, Buffer.from(data));
        // console.log('\nencypted data:\n', encryptedData.toString('base64'));
        return encryptedData;
    }
    decrypt(cipher) {
        const decryptedData = crypto_1.default.privateDecrypt({
            key: this.keypair.privateKey,
            padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256',
        }, cipher);
        // console.log('\ndecrypted data:\n', decryptedData.toString());
        return decryptedData;
    }
}
exports.RSA = RSA;
