import { SHA256 } from "./crypto"
import "./styles.scss"
import "./framework.scss"
import { ChangeMode, hashbox, hdrtl, pkeybox, usemodebtn } from "./Elements";
import { CurrentMode, Mode, SetMode } from "./Modes";
import { SetHash } from "./Generator";
import { SetValidateHash } from "./Validate";

hashbox.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        e.preventDefault();
        usemodebtn.click();
    }
})

pkeybox.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        e.preventDefault();
        usemodebtn.click();
    }
})



usemodebtn.addEventListener("click", e => {
    const OldValue = hdrtl.innerText;
    switch (CurrentMode) {
        case Mode.Generate:
            return SetHash();
        case Mode.Validate:
            return SetValidateHash();
    }
})

ChangeMode.addEventListener("click", e => {
    switch (CurrentMode) {
        case Mode.Generate:
            return SetMode(Mode.Validate);
        case Mode.Validate:
            return SetMode(Mode.Generate);
    }
})