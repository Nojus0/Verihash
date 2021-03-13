import { SHA256 } from "./crypto";
import { hashbox } from "./Elements";

export function SetHash() {
    hashbox.value = SHA256(hashbox.value);
}