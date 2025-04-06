//SECTION - User interaction functionality goes here

import {alphabet, words } from "./words.js";
import {makeGuess} from "./game.js";
import { renderKeyboard, ShowResetButton} from "./dom.js";

renderKeyboard(alphabet);
document.querySelectorAll('button').forEach((button, key) => {
    button.addEventListener('click', (e) => {
        const chosenLetter = alphabet[key-1].toLowerCase();
        makeGuess(chosenLetter);
        button.style.visibility = 'hidden'; });
});

document.querySelectorAll('#reset-button').forEach((button, key) => {
    button.addEventListener('click', (e) => {
        window.location.reload();
        button.style.visibility = 'hidden'; });
});