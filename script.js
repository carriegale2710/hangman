import {alphabet, guessedLetters, numWrongGuesses, makeGuess} from "./game.js";
import { renderKeyboard, ShowResetButton} from "./dom.js";
console.log(alphabet);
renderKeyboard(alphabet);


//NOTE -  Clicking a button should register its letter as a 'guess'
   
document.querySelectorAll('button').forEach((button, key) => {
    button.addEventListener('click', (e) => {
        makeGuess(key);
        button.style.visibility = 'hidden';  //remove the letter button that was pressed
         //sends the letter to a function called CheckLetterExistsinWord()
         // probably a every() iterator, will return true or false for each element checked
            //if true - replace underscore with the letter, DO NOT increment img number
            //if false - DO increase increment of img number name to change image to next one
    });
});


//NOTE The game should provide a win or loss message depending on the outcome
    //"GAME OVER - Try again?"
    //"GAME WON - Congrats!"

//NOTE There should be some functionality to play again.
console.log(ShowResetButton)  //refresh button appears along with message, "NEW GAME"





//NOTE -  ## Bonus

// Allow keyboard input
// Keep track of words that have been used already and display them on the screen
