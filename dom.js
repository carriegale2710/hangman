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

//NOTE  Replace underscore with letter to reveal if correctly guessed.
    //match letter to word[i], and replace in string array?
    //Make sure all letters are revealed , like double oo and aa

export const revealLettersInWord = (chosenLetter) => {  
    for (let i=0; i<currentWordArr.length; i++) {
       if (chosenLetter == currentWordArr[i]) {
        currentWordArrHidden.splice(i, 1, chosenLetter);
       };
    };
};


//NOTE - The game should provide a win or loss message depending on the outcome.
    //"GAME OVER - Try again?"  //gameOver() is called

export const gameOver = () => {
    document.querySelector('#game-message').innerHTML = "GAME OVER..";
    ShowResetButton();
};
    //"GAME WON - Congrats!"  //checkWinCondition() returns true

export const gameWon = () => {
    document.querySelector('#game-message').innerHTML = "GAME WON!";
    ShowResetButton();
};

//NOTE Reset button appears after game over or win, regardless of outcome.
export const ShowResetButton = () => {
    document.querySelector('#reset-button').classList.remove("hidden"); //refresh button appears 
}
    