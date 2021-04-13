export function RadioSetSelected(Elements: HTMLButtonElement[], selectEl: HTMLButtonElement) {
    Elements.forEach(item => item.classList.remove("selected"));
    selectEl.classList.add("selected");
}