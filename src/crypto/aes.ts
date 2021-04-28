import { createDecipher, createCipher} from "crypto";
import { CipherCCMTypes, CipherGCMTypes } from "node:crypto";

export let AES_ALGORITHM: string = "aes-256-ctr";

export function DecryptAES(buffer: Buffer, password: string) {
    const decipher = createDecipher(AES_ALGORITHM, password)
    return Buffer.concat([decipher.update(buffer), decipher.final()]);

}

export function EncryptAES(buffer: Buffer, password: string) {
    const cipher = createCipher(AES_ALGORITHM, password)
    return Buffer.concat([cipher.update(buffer), cipher.final()]);
}
