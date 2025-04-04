//NOTE - Everything to due with the game LOGIC should go here

//NOTE A game should start with a word being randomly selected.

//https://www.w3schools.com/js/js_json.asp

export const chooseRandomWord = () => {

}




//NOTE The game should keep track of which letters have been 'guessed' already.

export const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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




//NOTE -  If the letter is not in the word, an additional element to the hangman diagram should be added.
    //there are eleven guesses or 'lives' - so need to keep track of how many INCORRECT guesses have been made, and update the image to the next if an incorrect guess is made (event listener?)

//NOTE  If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
    //match letter to word[i], and replace in string array?

