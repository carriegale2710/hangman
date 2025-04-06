//SECTION - Everything to due with the game LOGIC should go here

import {alphabet, words } from "./words.js";


//Randomly choose a word to start game
export const randomWord = (words) => words[Math.floor(Math.random() * words.length)];

export const currentWord = randomWord(words);  //store randomised word here
export const currentWordArr = currentWord.split('');  //there should be word array 
console.log(currentWordArr);

export const guessedLetters = [];  
export let numWrongGuesses = 0;

export const makeGuess = (letter) => {
    if (guessedLetters.includes(alphabet[letter])) {
        return;
    }
    guessedLetters.push(alphabet[letter]);
    numWrongGuesses++;
    console.log(guessedLetters, numWrongGuesses);
}

//LETTER CHECK: will return -1 (falsy) if letter not in word
export const checkletterInWord = (chosenLetter, currentWordArr) => currentWordArr.includes(chosenLetter);
// console.log(checkletterInWord('e',currentWordArr)); //works


