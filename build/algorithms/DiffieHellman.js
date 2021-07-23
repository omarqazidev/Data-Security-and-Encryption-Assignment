"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DiffieHellman {
    constructor(primeNumber, primitiveRoot) {
        this.primeNumber = primeNumber;
        this.primitiveRoot = primitiveRoot;
        this.publicKey = -1;
        this.privateKey = Math.floor(Math.random() * 10);
    }
    generatePublicKey() {
        let publicKey = Math.pow(this.primitiveRoot, this.privateKey) % this.primeNumber;
        this.publicKey = publicKey;
        return publicKey;
    }
    generateSharedKey(OtherPublicKey) {
        let sharedKey = Math.pow(OtherPublicKey, this.privateKey) % this.primeNumber;
        this.privateKey = sharedKey;
        return sharedKey;
    }
    getPublicKey() {
        if (this.publicKey === -1) {
            this.generatePublicKey();
        }
        return this.publicKey;
    }
    getPrivateKey() {
        return this.privateKey;
    }
    doesPrivateKeysMatch(OtherPrivateKey) {
        return this.privateKey === OtherPrivateKey;
    }
}
exports.DiffieHellman = DiffieHellman;
