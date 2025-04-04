
//NOTE - Everything to do with rendering should go here


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

