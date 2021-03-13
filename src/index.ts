import { SHA256 } from "./crypto"
import "./styles.scss"
import "./framework.scss"

const pkeybox = <HTMLInputElement>document.getElementById("privateKey")
const hashbox = <HTMLInputElement>document.getElementById("Hash")
const hdrtl = document.getElementById("header-title");

const usemodebtn = document.getElementById("genHash");
const ChangeMode = document.getElementById("ChangeMode");

let Expanded: boolean = false;

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

    Expanded ? MenuExpanded() : NotExpanded();

    function MenuExpanded() {
        if (SHA256(pkeybox.value) === hashbox.value) {
            hdrtl.innerText = "Valid";
            hdrtl.style.color = "rgb(0, 224, 49)"

            setTimeout(() => {
                hdrtl.innerText = "Validate Hash";
                hdrtl.style.color = "";
            }, 1000);
        }
        else {
            hdrtl.innerText = "Invalid";
            hdrtl.style.color = "rgb(255, 0, 0)"
            setTimeout(() => {
                hdrtl.style.color = "";
                hdrtl.innerText = "Validate Hash";
            }, 1000);
        }
    }

    function NotExpanded() {
        hashbox.value = SHA256(hashbox.value);
    }

})

ChangeMode.addEventListener("click", e => {
    Expanded = !Expanded

    if (Expanded) {
        ChangeMode.innerText = "Change to Generator"
        hdrtl.innerText = "Validate Hash"
        usemodebtn.innerText = "Validate";
        hashbox.placeholder = "Hash"
        pkeybox.style.margin = "1.5%";
        pkeybox.style.padding = "1.3%"
        pkeybox.style.height = "3rem";
        pkeybox.style.width = "auto"
    } else {
        ChangeMode.innerText = "Change to Validation"
        hashbox.placeholder = "Text"
        hdrtl.innerText = "Generate Hash"
        usemodebtn.innerText = "Generate Hash"
        pkeybox.style.margin = "0px";
        pkeybox.style.padding = "0px"
        pkeybox.style.height = "0px";
    }

})