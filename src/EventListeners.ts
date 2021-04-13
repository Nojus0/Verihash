import { SecondBox, FirstBox, FirstButton, Radio1, Radio2 } from "./Elements";
import { InputOnEnter, OnClick } from "./framework/Hooks";
import { Mode, SetMode } from "./Modes";
import "./Modes/RadioController"

OnClick(Radio2, e => SetMode(Mode.AES));

OnClick(Radio1, e => SetMode(Mode.SHA256))

InputOnEnter([FirstBox, SecondBox], FirstButton);
