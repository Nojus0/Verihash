import { createHash } from "crypto";
import { BinaryToTextEncoding } from "crypto";
export function SHA256(str: string, enc: BinaryToTextEncoding = "base64") {
    return createHash("sha256").update(str).digest(enc);
}

export enum ValidateResult {
    Success,
    Failled
}

export function ValidateToken(privateToken: string, hash: string): ValidateResult {
    if (SHA256(privateToken.toString()) === hash) return ValidateResult.Success;
    else return ValidateResult.Failled;
}

export function CreateToken(privateToken: string) {
    if (!privateToken) return null;
    return SHA256(privateToken);
}