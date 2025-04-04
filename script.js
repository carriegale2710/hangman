import {alphabet, guessedLetters, guessesLeft, makeGuess} from "./game.js";
import { renderKeyboard } from "./dom.js";
console.log(alphabet);
renderKeyboard(alphabet);

document.querySelectorAll('button').forEach((button, key) => {
    button.addEventListener('click', (e) => {
        console.log(key);
        console.log('clicked', e.target);
    });
});