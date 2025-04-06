//SECTION - Everything to do with rendering should go here

import { alphabet, words } from "./words.js";
import { randomWord, currentWordArr } from "./game.js";

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

//# Load random word as underscores on screen
const currentWordArrHidden = currentWordArr.map((letter) => '__').join(' ');  //make a copy, hide letters as underscores
document.querySelector('#current-word').innerHTML = currentWordArrHidden;  //loading hidden word to the screen


//NOTE  If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
    //match letter to word[i], and replace in string array?


//NOTE -  If the letter pressed is not in the word, an additional element to the hangman diagram should be added.






- [ ] //NOTE - The game should provide a win or loss message depending on the outcome.
    //"GAME OVER - Try again?"
    //"GAME WON - Congrats!"



export const ShowResetButton = () => {
    document.querySelector('#reset-button').classList.remove("hidden"); //refresh button appears 
}
    