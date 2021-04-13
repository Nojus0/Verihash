import { FirstButton, HeaderTitle, FirstBox, SecondButton, SecondBox, Output } from "../Elements";
import { CollapseTextbox, ExpandTextbox } from "../framework/textbox";

export function SHA() {
    CollapseTextbox(SecondBox)
    CollapseTextbox(Output)
    SecondButton.innerText = "Switch to Validation"
    FirstBox.placeholder = "Text"
    HeaderTitle.innerText = "Generate Hash"
    FirstButton.innerText = "Generate Hash"
}


export function SHA256Validate() {
    ExpandTextbox(SecondBox);
    SecondButton.innerText = "Switch to Generator"
    HeaderTitle.innerText = "Validate Hash"
    FirstButton.innerText = "Validate";
    FirstBox.placeholder = "Hash"
}