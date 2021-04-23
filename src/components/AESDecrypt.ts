import { DecryptAES } from "../crypto/aes";
import { SecondBox, FirstButton, FirstBox, SecondButton, HeaderTitle, Output } from "../Elements";
import { Encoding } from "./Encoding";

export function AESDecrypt() {
    FirstBox.value = "";
    SecondBox.value = "";
    Output.value = "";
    HeaderTitle.innerText = "Decrypt text with AES"
    FirstBox.placeholder = "Text";
    SecondBox.placeholder = "Decrypt Key";
    FirstButton.innerText = "Decrypt";
    SecondButton.innerText = "Switch to Encryption"
}

export function useAESDecrypt() {
    const DescryptedText = DecryptAES(Buffer.from(FirstBox.value, Encoding), SecondBox.value).toString("utf-8");
    if (DescryptedText === "") Output.value = "Bad data";
    Output.value = DescryptedText;
}

