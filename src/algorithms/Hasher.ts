import crypto from 'crypto';

export class Hasher {
    static textToSha1(plainText: string) {
        return crypto.createHash('sha1').update(plainText).digest('hex');
    }

    static textToMd5(plainText: string) {
        return crypto.createHash('md5').update(plainText).digest('hex');
    }
}
