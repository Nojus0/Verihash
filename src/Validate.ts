import { SHA256 } from "./crypto";
import { hashbox, hdrtl, pkeybox } from "./Elements";

export function SetValidateHash() {
    if (SHA256(pkeybox.value) === hashbox.value) {
        hdrtl.innerText = "Valid Key";
        hdrtl.style.color = "rgb(0, 224, 49)"

        setTimeout(() => {
            hdrtl.innerText = "Validate Hash";
            hdrtl.style.color = "";
        }, 1000);
    }
    else {
        hdrtl.innerText = "Invalid Key";
        hdrtl.style.color = "rgb(255, 0, 0)"
        setTimeout(() => {
            hdrtl.style.color = "";
            hdrtl.innerText = "Validate Hash";
        }, 1000);
    }
}