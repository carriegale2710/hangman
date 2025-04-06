//SECTION - UI functionality goes here

import { alphabet, words } from "./words.js";
import {guessedLetters, numWrongGuesses, makeGuess} from "./game.js";
import { renderKeyboard, ShowResetButton} from "./dom.js";

renderKeyboard(alphabet);



document.querySelectorAll('button').forEach((button, key) => {
    button.addEventListener('click', (e) => {
        makeGuess(key);
        button.style.visibility = 'hidden'; });
});


//NOTE The game should provide a win or loss message depending on the outcome
    //"GAME OVER - Try again?"
    //"GAME WON - Congrats!"


 