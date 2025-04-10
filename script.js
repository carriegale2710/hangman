//SECTION - User interaction functionality goes here

//User Flow
//1. "Has the use guessed a letter?" 
    //YES (Event: user clicks key in keyboard) => makeGuess() 
        // 2."Has the game finished yet?" (Event: User wins (all letters revealed) or loses (runs out of guesses (11)))
            // YES => endOfGame() + showResetButton()
            // 3. "Does the user want to play again?" (Event: user clicks reset button)
                // YES => 4. startNewGame() + randomiseWord()


import {alphabet, words } from "./assets/words.js";
import {makeGuess} from "./game.js";
import { resetKeyboard, hideLetterKey, ShowResetButton} from "./dom.js";






//render the keyboard on screen with alphabet array at start of game
resetKeyboard(alphabet);


//register button click as a guess in game logic and dom UI
document.querySelectorAll('button').forEach((button, key) => {
    button.addEventListener('click', (e) => {
        const chosenLetter = alphabet[key-1].toLowerCase();
        makeGuess(chosenLetter);
        button.style.visibility = 'hidden'; }); //hide key/button when pressed 
    });





// reset the game if reset button is clicked
document.querySelector('#reset-button').forEach((button, key) => {
    button.addEventListener('click', (e) => {
        window.location.reload();
        button.style.visibility = 'hidden'; });
});
