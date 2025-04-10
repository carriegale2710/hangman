//SECTION - Everything to do with rendering should go here

//26 letters as buttons on screen
export const renderKeyboard = (alphabetArr) => {
    const keyboardSection = document.querySelector('#keyboard') //blank keys
    alphabetArr.forEach((letter)=> { //put one letter on each key
        const button = document.createElement('button');
        const buttonText = document.createTextNode(letter);
        button.append(buttonText);
        button.classList.add('button');
        keyboardSection.append(button);
    });
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



export const gameOver = () => {
    document.querySelector('#game-message').innerHTML = "GAME OVER..";
    ShowResetButton();
};

export const gameWon = () => {
    document.querySelector('#game-message').innerHTML = "GAME WON!";
    ShowResetButton();
};

//Reset button appears after game over or win, regardless of outcome.
export const ShowResetButton = () => {
    document.querySelector('#reset-button').classList.remove("hidden"); //refresh button appears 
}
    