import { BinaryToTextEncoding } from "node:crypto";
import { RadioBase64, RadioHex } from "../Elements";
import { RadioSetSelected } from "../framework/radio"
import { OnClick } from "../framework/Hooks"
const RadioButtons = [RadioBase64, RadioHex];
export let Encoding: BinaryToTextEncoding = "base64";

SetEncoding(Encoding);
export function SetEncoding(enc: BinaryToTextEncoding) {
    Encoding = enc;
    switch (enc) {
        case "base64":
            return RadioSetSelected(RadioButtons, RadioBase64);
        case "hex":
            return RadioSetSelected(RadioButtons, RadioHex);
    }
}

OnClick(RadioBase64, e => SetEncoding("base64"));
OnClick(RadioHex, e => SetEncoding("hex"));