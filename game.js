//SECTION - Everything to due with the game LOGIC should go here

import { revealLettersInWord, updateHangmanImg, resetKeyboard, hideSecretWord, endOfGameScreen, changeMessage } from "./dom.js";

let numWrongGuesses = 0; //keep track of wrong guesses
let guessedLetters = []; //keep track of letters guessed
let secretWord;


export const newGame = (words) => {
    changeMessage("Choose your next guess...");
    secretWord = selectRandomWordFromList(words);
    console.log(secretWord);
    hideSecretWord(secretWord);
    // console.log(secretWord)
    numWrongGuesses = 0;
    guessedLetters = [];
    updateHangmanImg(0);
    
    return secretWord;
};


//Randomly choose a word to start the game
export const selectRandomWordFromList = (words) => {
   return words[Math.floor(Math.random() * words.length)].split('');  // randomised word, as array
};



//when guess made, check if in word (pass) or not in word (fail)
export const makeGuess = (chosenLetter) => {
    guessedLetters.push(chosenLetter);
    if (secretWord.includes(chosenLetter)) { //PASS
        console.log("correct!");
        changeMessage("Correct!");
        revealLettersInWord(secretWord,chosenLetter); //reveal hidden letters   
        
    } else { //FAIL
        console.log("incorrect!");
        changeMessage("Not quite..");
        numWrongGuesses++; //-1 hangman life
        hangmanImg.src = `./assets/img/h-${numWrongGuesses}.jpg`; //next img
    };
    IsGameOver();
    console.log(numWrongGuesses,guessedLetters);
};



//check if any win or loss conditions are filled (ie. game over)
export const IsGameOver = () => {
    if (numWrongGuesses >= 10) {  
        console.log('gamelose');
        endOfGameScreen('lose');
    } else if (secretWord.every((letter) => (guessedLetters.includes(letter)))){
        console.log('gamewin');
        endOfGameScreen('win');
    };
};

