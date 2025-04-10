//SECTION - Everything to do with rendering should go here


//start new Game



//render 26 letters as buttons on screen
export const resetKeyboard = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log(alphabet.length);
    const keyboardSection = document.querySelector('#keyboard') //blank keys
    alphabet.split('').forEach((letter)=> { //put one letter on each key
        const button = document.createElement('button');
        const buttonText = document.createTextNode(letter);
        button.append(buttonText);
        button.classList.add('button');
        keyboardSection.append(button);
    });
};


//Load random word as underscores on screen
export const hideSecretWord = () => {
    secretWordArr.map((letter) => '__').join(' ');  //make a copy, hide letters as underscores       
    document.querySelector('#current-word').innerHTML = secretWordArrHidden;  //loading hidden word to the screen
}
 
export const updateHangmanImg = () => {
    const hangmanImg = document.querySelector('#hangmanImg'); // get currently displayed img
    // console.log(hangmanImg.src);
}



//NOTE (GOT STUCK HERE..)  Replace underscore with letter to reveal if correctly guessed.
    //match letter to word[i], and replace in string array?
    //Make sure all letters are revealed , like double oo and aa
    //Should I use map() and filter()? or maybe css class to toggle visibility???


export const revealLettersInWord = (chosenLetter,currentWordArr) => { 
    // map - for each letter in the current chosen word array 
    currentWordArr.map((chosenletter) => chosenLetter == currentWordArr[i]? chosenLetter : "__" ); 
        //if letter button pushed is included in current chosen word on screen ? 
            // reveal the letter
            // : otherwise hide the letter as an underscore
};


export const endOfGameScreen = () => {
    document.querySelector('#reset-button').classList.remove("hidden"); //Reset button appears after game over or win, regardless of outcome.
    if (/*game won*/) {
        document.querySelector('#game-message').innerHTML = "YOU LOSE..";
    } else {
        document.querySelector('#game-message').innerHTML = "YOU WIN!";
    }
};
