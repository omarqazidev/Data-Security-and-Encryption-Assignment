"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class DiffieHellman {
    constructor() {
        this.person = crypto_1.default.getDiffieHellman('modp15');
        this.secret = '';
    }
    generateKeys() {
        this.person.generateKeys();
    }
    getPublicKey() {
        return this.person.getPublicKey().toString('hex');
    }
    computeSecret(otherPersonHexPublicKey) {
        this.secret = this.person.computeSecret(otherPersonHexPublicKey, 'hex', 'hex');
    }
    getSecret() {
        return this.secret;
    }
    matchSecrets(otherPersonSecret) {
        if (this.secret === '') {
            return false;
        }
        return this.secret === otherPersonSecret;
    }
}
exports.DiffieHellman = DiffieHellman;
