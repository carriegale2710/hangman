//SECTION - Everything to do with rendering should go here


//render 26 letters as buttons on screen as a keyboard
export const resetKeyboard = (keys) => {
    // console.log(alphabet.length);
    const keyboardSection = document.querySelector('#keyboard') //blank keys
    keys.forEach((key)=> { //put one letter on each key
        const button = document.createElement('button');
        const buttonText = document.createTextNode(key);
        button.append(buttonText);
        button.classList.add('letter-button');
        keyboardSection.append(button);
    });
};

//reset message on screen
export const changeMessage = (message) => {
    document.querySelector('#game-message').innerHTML = message ;
}

//update hangman image 
export const updateHangmanImg = (num) => {
    const hangmanImg = document.querySelector('#hangmanImg'); // get currently displayed img
    hangmanImg.src = `./assets/img/h-${num}.jpg`;
}

//Load secret word as underscores on screen
export const hideSecretWord = (secretWord) => {
    const secretWordHidden = secretWord.map((letter) => '__').join(' ');  //make a copy, hide letters as underscores       
    document.querySelector('#current-word').innerHTML = secretWordHidden;  //loading hidden word to the screen
}


//Replace underscore with letter to reveal if correctly guessed.
//Make sure all letters are revealed , like double oo and aa
export const revealLettersInWord = (secretWord,chosenLetter) => { 
    let displayStr = document.querySelector('#current-word').innerHTML;
    const displayStrArr = displayStr.split(' ');
    for (let i=0; i<=secretWord.length; i++){
        //match letter to word[i], and replace in string array?
        if (secretWord[i] == chosenLetter) {
            displayStrArr[i] = chosenLetter; // reveal the letter
            // console.log(displayStrArr);
        };
    };
    document.querySelector('#current-word').innerHTML = displayStrArr.join(' ');
    console.log(displayStr);
    return displayStr;
};


//display reset button and end game message based on result
export const endOfGameScreen = (result) => {
    document.querySelector('#reset-button').classList.remove("hidden"); //Reset button appears after game over or win, regardless of outcome.
    const makeHidden = (button) => button.classList.add('hidden');
    document.querySelectorAll('.letter-button').forEach(makeHidden);
    if (result === 'lose') {
        document.querySelector('#game-message').innerHTML = "YOU LOSE..";
    } else if (result === 'win') {
        document.querySelector('#game-message').innerHTML = "YOU WIN!";
    } else {
        console.log("Error determining result");
    };
};
