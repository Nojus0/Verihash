export function ExpandTextbox(textbox: HTMLElement) {

    if (textbox.classList.contains("expand")) return;

    textbox.tabIndex = 0;
    textbox.classList.add("expand");
    textbox.classList.remove("collapse");
}
export function CollapseTextbox(textbox: HTMLElement) {

    if (textbox.classList.contains("collapse")) return; // Already Collapsed

    textbox.tabIndex = -1;
    textbox.classList.remove("expand")
    textbox.classList.add("collapse")
}

