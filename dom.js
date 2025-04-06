//SECTION - Everything to do with rendering should go here

//NOTE - Create a user interface made up of buttons representing all 26 letters of the alphabet.
export const renderKeyboard = (alphabetArr) => {
    const keyboardSection = document.querySelector('#keyboard')
    alphabetArr.forEach((letter)=> {
        const button = document.createElement('button');
        const buttonText = document.createTextNode(letter);
        button.append(buttonText);
        button.classList.add('button');
        keyboardSection.append(button);
    });
}

//NOTE - A representation of the word made up of underscore (_) characters should display on the screen.



//NOTE - There should be some functionality to play again.
export const ShowResetButton = () => {
    document.querySelector('#reset-button').classList.remove("hidden"); //refresh button appears 
}