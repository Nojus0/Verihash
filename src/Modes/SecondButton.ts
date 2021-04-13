import { SecondButton } from "../Elements";
import { CurrentMode, Mode, SetMode } from "../Modes";
import { OnClick } from "../framework/Hooks";

OnClick(SecondButton, e => { // Click switch to decrypt
    switch (CurrentMode) {
        case Mode.SHA256:
            return SetMode(Mode.SHA256Validate);
        case Mode.SHA256Validate:
            return SetMode(Mode.SHA256);
        case Mode.AES:
            return SetMode(Mode.AESDecypt);
        case Mode.AESDecypt:
            return SetMode(Mode.AES);
    }
})