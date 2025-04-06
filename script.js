//SECTION - UI functionality goes here

import {alphabet, guessedLetters, numWrongGuesses, makeGuess} from "./game.js";
import { renderKeyboard, ShowResetButton} from "./dom.js";
console.log(alphabet);
renderKeyboard(alphabet);


//NOTE -  Clicking a button should register its letter as a 'guess'
document.querySelectorAll('button').forEach((button, key) => {
    button.addEventListener('click', (e) => {
        makeGuess(key);
        button.style.visibility = 'hidden'; });
});


//NOTE The game should provide a win or loss message depending on the outcome
    //"GAME OVER - Try again?"
    //"GAME WON - Congrats!"

//NOTE There should be some functionality to play again.
console.log(ShowResetButton)  //refresh button appears along with message, "NEW GAME"


