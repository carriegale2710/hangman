//SECTION - Everything to do with rendering should go here

import { alphabet, words } from "./words.js";
import { randomWord, currentWordArr, currentWordArrHidden} from "./game.js";

//NOTE - 26 letters as buttons on screen
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

//NOTE (GOT STUCK HERE..)  Replace underscore with letter to reveal if correctly guessed.
    //match letter to word[i], and replace in string array?
    //Make sure all letters are revealed , like double oo and aa
export const revealLettersInWord = (chosenLetter,currentWordArr) => { 
    currentWordArr.map((letter) => chosenLetter == currentWordArr[i]? chosenLetter : "__" );
};


export const gameOver = () => {
    document.querySelector('#game-message').innerHTML = "GAME OVER..";
    ShowResetButton();
};

export const gameWon = () => {
    document.querySelector('#game-message').innerHTML = "GAME WON!";
    ShowResetButton();
};

//NOTE Reset button appears after game over or win, regardless of outcome.
export const ShowResetButton = () => {
    document.querySelector('#reset-button').classList.remove("hidden"); //refresh button appears 
}
    