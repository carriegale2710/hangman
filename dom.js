//SECTION - Everything to do with rendering should go here

import { alphabet, words } from "./words.js";
import { randomWord} from "./game.js";

export const renderKeyboard = (alphabetArr) => {
    const keyboardSection = document.querySelector('#keyboard')
    alphabetArr.forEach((letter)=> {
        const button = document.createElement('button');
        const buttonText = document.createTextNode(letter);
        button.append(buttonText);
        button.classList.add('button');
        keyboardSection.append(button);
    });
}



//NOTE  If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
    //match letter to word[i], and replace in string array?
//revealLettersInWord();



//NOTE -  If the letter pressed is not in the word, an additional element to the hangman diagram should be added.
//showNextHangman();





- [ ] //NOTE - The game should provide a win or loss message depending on the outcome.
    //"GAME OVER - Try again?"  //gameOver() is called
    //"GAME WON - Congrats!"  //checkWinCondition() returns true


//play againg button appears after game over or win, regardless of outcome.
export const ShowResetButton = () => {
    document.querySelector('#reset-button').classList.remove("hidden"); //refresh button appears 
}
    