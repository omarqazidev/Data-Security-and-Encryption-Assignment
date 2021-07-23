"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Hasher {
    static textToSha1(plainText) {
        return crypto_1.default.createHash('sha1').update(plainText).digest('hex');
    }
    static textToMd5(plainText) {
        return crypto_1.default.createHash('md5').update(plainText).digest('hex');
    }
}
exports.Hasher = Hasher;
