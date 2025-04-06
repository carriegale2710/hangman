//SECTION - Everything to due with the game LOGIC should go here

import {alphabet, words } from "./words.js";
import {gameOver, gameWon, revealLettersInWord} from "./dom.js";

//Randomly choose a word to start game
export const randomWord = (words) => words[Math.floor(Math.random() * words.length)];
export const currentWord = randomWord(words);  //store randomised word here
console.log(currentWord);

export const currentWordArr = currentWord.split('');  //there should be word array 
console.log(currentWordArr);

//# Load random word as underscores on screen
export const currentWordArrHidden = currentWordArr.map((letter) => '__').join(' ');  //make a copy, hide letters as underscores
document.querySelector('#current-word').innerHTML = currentWordArrHidden;  //loading hidden word to the screen

const hangmanImg = document.querySelector('#hangmanImg');
console.log(hangmanImg.src);


export let numWrongGuesses = 0; //keep track of wrong guesses
export const guessedLetters = []; //keep track of letters guessed


export const makeGuess = (chosenLetter) => {
    console.log(chosenLetter);
    
    if (currentWordArr.includes(chosenLetter)) {
        console.log("yes!");
        guessedLetters.push(chosenLetter);
        revealLettersInWord(chosenLetter);
        checkWinCondition(currentWordArr, guessedLetters);
    } else if (numWrongGuesses < 10) {
        console.log("nope");
        numWrongGuesses++;
        hangmanImg.src = `./assets/img/h-${numWrongGuesses}.jpg`; //next img
    } else {
        console.log("gameOver");
        gameOver();
        
    };
};


// gameOver() + UI
// condition: when number of incorrect guesses >= 10

//checkWin condition() -> UI
//condition : all letters are found in the word 
    // if  every letter of word in the guessedLetter array, game won.

export const checkWinCondition = (currentWordArr,guessedLetters) => {
    const letterCorrectlyGuessed = (letter) => guessedLetters.includes(letter);
    if (currentWordArr.every(letterCorrectlyGuessed)){
        return gameWon();
    };
};


// export const gameReset = ()
