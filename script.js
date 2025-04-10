//SECTION - User interaction functionality goes here

//User Flow
//1. "Has the use guessed a letter?" 
    //YES (Event: user clicks key in keyboard) => makeGuess() 
        // 2."Has the game finished yet?" (Event: User wins (all letters revealed) or loses (runs out of guesses (10)))
            // YES => endOfGame() + showResetButton()
            // 3. "Does the user want to play again?" (Event: user clicks reset button)
                // YES => 4. startNewGame() + randomiseWord()


      
import {  makeGuess, newGame } from "./game.js";  
import { words} from "./assets/words.js";   
import { resetKeyboard } from "./dom.js";
const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');


//start or reset the game
resetKeyboard(alphabet); 
newGame(words);


//NOTE - Event listeners - check if user does something

//if a letter key is clicked, register as a guess with that chosen letter
const letterButton = document.querySelectorAll('button')
letterButton.forEach((button, key) => {
    button.addEventListener('click', (e) => {
        const chosenLetter = alphabet[key-1];
        makeGuess(chosenLetter);
        button.classList.add('hidden'); //hide key/button when pressed, to avoid repeated guesses
    }); 
});

// reset the game if reset button is clicked
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', (e) => {
    // window.location.reload(); //lazy way to reload the game - refresh browser
    resetButton.classList.add('hidden'); 
    const makeVisible = (button) => button.classList.remove('hidden');
    document.querySelectorAll('.letter-button').forEach(makeVisible); //show full keyboard again
    // console.log(document.querySelectorAll('.letter-button')); 
    newGame(words);
});