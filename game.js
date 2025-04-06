//SECTION - Everything to due with the game LOGIC should go here

//DONE How to import a json array of words into game.js
import {alphabet, words } from "./words.js";

//DONE - Find a Random number between 0 (first el) and wordsArr.length - 1 (last el).
export const randomWord = (words) => words[Math.floor(Math.random() * words.length)];
document.querySelector("#hidden-word").innerText(randomWord(words));


//DONE-  The game should keep track of which letters have been 'guessed' already.
export const guessedLetters = [];  

//DONE -  If the letter is not in the word, an additional element to the hangman diagram should be added.
export let numWrongGuesses = 0;

//NOTE  If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
    //match letter to word[i], and replace in string array?

//DONE -  Clicking a button should register its letter as a 'guess'
export const makeGuess = (letter) => {
    if (guessedLetters.includes(alphabet[letter])) {
        return;
    }
    guessedLetters.push(alphabet[letter]);
    numWrongGuesses++;
    console.log(guessedLetters, numWrongGuesses);
}



