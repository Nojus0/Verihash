import { SecondBox, HeaderTitle, FirstBox } from "../Elements"
import { SHA256 } from "../crypto/sha256"
import { Encoding } from "./Encoding";


export function UseSHA256() {
    FirstBox.value = SHA256(FirstBox.value, Encoding);
}

export function UseSHA256Validate() {
    if (SHA256(SecondBox.value, Encoding) === FirstBox.value) {
        HeaderTitle.innerText = "Valid Key";
        HeaderTitle.style.color = "rgb(0, 224, 49)"

        setTimeout(() => {
            HeaderTitle.innerText = "Validate Hash";
            HeaderTitle.style.color = "";
        }, 1000);
    }
    else {
        HeaderTitle.innerText = "Invalid Key";
        HeaderTitle.style.color = "rgb(255, 0, 0)"
        setTimeout(() => {
            HeaderTitle.style.color = "";
            HeaderTitle.innerText = "Validate Hash";
        }, 1000);
    }
}