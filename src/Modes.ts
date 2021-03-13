import { ChangeMode, hashbox, hdrtl, pkeybox, usemodebtn } from "./Elements";

export enum Mode {
    Generate,
    Validate
}

export let CurrentMode = Mode.Generate;


export function SetMode(mode: Mode) {
    if (mode === Mode.Validate) {
        ChangeMode.innerText = "Change to Generator"
        hdrtl.innerText = "Validate Hash"
        usemodebtn.innerText = "Validate";
        hashbox.placeholder = "Hash"
        pkeybox.style.margin = "0.5rem 0 0.5rem 0";
        pkeybox.style.padding = "0.85rem 0.85rem 0.85rem 0.85rem"
        pkeybox.style.height = "3rem";
        pkeybox.style.width = "auto"
        CurrentMode = Mode.Validate;
    } else if (mode === Mode.Generate) {
        ChangeMode.innerText = "Change to Validation"
        hashbox.placeholder = "Text"
        hdrtl.innerText = "Generate Hash"
        usemodebtn.innerText = "Generate Hash"
        pkeybox.style.margin = "0px";
        pkeybox.style.padding = "0px"
        pkeybox.style.height = "0px";
        CurrentMode = Mode.Generate;
    }
}




