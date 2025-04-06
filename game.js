//SECTION - Everything to due with the game LOGIC should go here

import {alphabet, words } from "./words.js";
import {} from "./dom.js";

//Randomly choose a word to start game
export const randomWord = (words) => words[Math.floor(Math.random() * words.length)];
const currentWord = randomWord(words);  //store randomised word here
console.log(currentWord);

const currentWordArr = currentWord.split('');  //there should be word array 
console.log(currentWordArr);

//# Load random word as underscores on screen
const currentWordArrHidden = currentWordArr.map((letter) => '__').join(' ');  //make a copy, hide letters as underscores
document.querySelector('#current-word').innerHTML = currentWordArrHidden;  //loading hidden word to the screen



export let numWrongGuesses = 0;

export const makeGuess = (chosenLetter) => {
    console.log(chosenLetter);
    if (currentWordArr.includes(chosenLetter)) {
        console.log("yes!");
        //revealLettersInWord();
        //checkWinCondition();
    } else if (numWrongGuesses < 9) {
        console.log("nope");
        numWrongGuesses++;
        //showNextHangman();
    } else {
        console.log("gameOver");
        //gameOver();
    };
};


//gameOver()
// condition: when number of incorrect guesses >= 10

//checkWin condition()
//condition : all letters are revealed on spaces





//keep track of letters guessed

// export const guessedLetters = [];  

// if (guessedLetters.includes(alphabet[letter])) {
//     return;
// }
// guessedLetters.push(alphabet[letter]);