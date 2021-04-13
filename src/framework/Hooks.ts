import { IOnClick } from "./Interfaces";

export function OnClick(el: HTMLElement, callback: IOnClick) {
    el.addEventListener("click", e => callback(e));
}

export function InputOnEnter(Element: HTMLInputElement | HTMLInputElement[], targetclick: HTMLButtonElement) {

    if (Array.isArray(Element)) for (const el of Element) AddListener(el);
    else AddListener(Element);

    function AddListener(Element: HTMLInputElement) {
        Element.addEventListener("keyup", e => {
            if (e.key == "Enter") {
                e.preventDefault();
                targetclick.click();
            }
        })
    }

}

