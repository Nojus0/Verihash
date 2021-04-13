import { SHA, SHA256Validate } from "./components/SHA256";
import { AES } from "./components/AES"
import { AESDecrypt } from "./components/AESDecrypt"
import "./Modes/FirstButton";
import "./Modes/SecondButton"

export enum Mode {
    AES,
    AESDecypt,
    SHA256,
    SHA256Validate
}
export let CurrentMode = Mode.SHA256;

export function SetMode(mode: Mode) { // Change menu
    CurrentMode = mode;
    switch (mode) {
        case Mode.SHA256Validate:
            return SHA256Validate();
        case Mode.SHA256:
            return SHA();
        case Mode.AES:
            return AES();
        case Mode.AESDecypt:
            return AESDecrypt();
    }
}

