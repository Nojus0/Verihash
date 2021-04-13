import { SecondBox, FirstButton, HeaderTitle, FirstBox, SecondButton, Output } from "../Elements";
import { ExpandTextbox } from "../framework/textbox";
import { Encoding } from "./Encoding"
import { EncryptAES } from "../crypto/aes";
export function AES() {
    ExpandTextbox(SecondBox);
    ExpandTextbox(Output);
    FirstBox.value = "";
    SecondBox.value = "";
    Output.value = "";
    HeaderTitle.innerText = "Encrypt text with AES"
    FirstBox.placeholder = "Text";
    SecondBox.placeholder = "Encrypt Key";
    FirstButton.innerText = "Encrypt";
    SecondButton.innerText = "Switch to Decryption"
}


export function useAESEncrypt() {
    Output.value = EncryptAES(Buffer.from(FirstBox.value, "utf-8"), SecondBox.value).toString(Encoding);
}


