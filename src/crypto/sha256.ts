import { createHash } from "crypto";
import { BinaryToTextEncoding } from "node:crypto";

export function SHA256(str: string, enc: BinaryToTextEncoding) {
    return createHash("sha256").update(str).digest(enc);
}


