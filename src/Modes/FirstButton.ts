import { useAESEncrypt } from "../components/AES";
import { useAESDecrypt } from "../components/AESDecrypt";
import { UseSHA256, UseSHA256Validate } from "../components/SHA256Validate";
import { FirstButton } from "../Elements";
import { OnClick } from "../framework/Hooks";
import { CurrentMode, Mode } from "../Modes";

OnClick(FirstButton, e => { // Click Encrypt
    switch (CurrentMode) {
        case Mode.SHA256:
            return UseSHA256();
        case Mode.SHA256Validate:
            return UseSHA256Validate();
        case Mode.AES:
            return useAESEncrypt();
        case Mode.AESDecypt:
            return useAESDecrypt();
    }
})