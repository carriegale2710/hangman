//SECTION - Everything to due with the game LOGIC should go here






import {alphabet, words } from "./assets/words.js";
import {gameOver, gameWon, revealLettersInWord} from "./dom.js";



//Randomly choose a word to start game
export const selectRandomWordFromList = (words) => words[Math.floor(Math.random() * words.length)];
export const secretWord = selectRandomWordFromList(words);  //store randomised word here
console.log(secretWord);
export const secretWordArr = secretWord.split('');  //there should be word array 
console.log(secretWordArr);




//keep track of user guesses
export let numWrongGuesses = 0; //keep track of wrong guesses
export const guessedLetters = []; //keep track of letters guessed

//when guess made, check if in word (pass) or not in word (fail)
export const makeGuess = (secretWord, chosenLetter) => {
    guessedLetters.push(chosenLetter);
    if (secretWord.includes(chosenLetter)) { //PASS
        console.log("yes!");
        revealLettersInWord(secretWord,chosenLetter); //reveal hidden letters   
    } else { //FAIL
        console.log("no!");
        hangmanImg.src = `./assets/img/h-${numWrongGuesses}.jpg`; //next img
        numWrongGuesses++; //-1 hangman life
        
    };
    IsGameOver();
};




export const IsGameOver = () => {
    if (numWrongGuesses > 10) {  
        console.log('gameover');
        endOfGameScreen();
        // return gameOver();
    } 
    // else if (all letters revealed){
        //console.log("gameOver");
        //return gameOver();
    //}
   
};

// export const checkWinCondition = (secretWord) => {
//     const letterCorrectlyGuessed = (letter) => guessedLetters.includes(letter);
//     if (secretWord.every(letterCorrectlyGuessed)){
//         endOfGameScreen();
//     };
// };


// export const gameReset = ()
