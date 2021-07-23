export class DiffieHellman {
    primeNumber: number;
    primitiveRoot: number;
    publicKey: number;
    private privateKey: number;

    constructor(primeNumber: number, primitiveRoot: number) {
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

    generateSharedKey(OtherPublicKey: number) {
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

    doesPrivateKeysMatch(OtherPrivateKey: number) {
        return this.privateKey === OtherPrivateKey;
    }
}
