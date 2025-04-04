//NOTE - Everything to due with the game LOGIC should go here
export const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export const guessedLetters = [];
export let guessesLeft = 11;

export const makeGuess = (letter) => {
    if (guessedLetters.includes(alphabet[letter])) {
        return;
    }
    guessedLetters.append(letter);
    guessesLeft = guessesLeft -1;
    console.log(guessedLetters, guessesLeft);

}