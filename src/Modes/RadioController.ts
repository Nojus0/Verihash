import { Radio1, Radio2 } from "../Elements";
import { OnClick } from "../framework/Hooks"
import { RadioSetSelected } from "../framework/radio"
const RadioModes = [Radio1, Radio2];

OnClick(Radio1, e => {
    RadioSetSelected(RadioModes, Radio1);
})

OnClick(Radio2, e => {
    RadioSetSelected(RadioModes, Radio2);
})