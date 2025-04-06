# Hangman

## Outline

This task will require you to create a web based game of [Hangman](https://en.wikipedia.org/wiki/Hangman_\(game\)) using JavaScript.

This will require understanding of:

- [[Array]]s
- [[array-iterator]]
- [[DOM]] manipulation
-  [[Event-listeners]]
- [[string-manipulation]]

There are images provided for each stage of the eleven guesses, but feel free to use your own if you like. There is a word list provided, feel free to modify it as you see fit.

## MVP

- [ ] //NOTE -  A game should start with a word being randomly selected.
    - [ ] //TODO How to import a json array of words into game.js
    - [ ] //TODO Find a Random number between 0 (first el) and wordsArr.length - 1 (last el).

- [ ] //NOTE - A representation of the word made up of underscore (_) characters should display on the screen.
    - [ ] //TODO Go thru each letter in word, and transform it into an underscore (use map iterator?)
    - [ ] //TODO there should be word array and corresponding unsderscore ver of it

- [x] //NOTE - Create a user interface made up of buttons representing all 26 letters of the alphabet.
    - [x] //TODO Create alphabet array of all 26 letters
    - [x] //TODO Insert each letter into 26 buttons inside a keyboard interface

- [x] //NOTE - Clicking a button should register its letter as a 'guess'.
    - [x] //TODO remove the letter button that was pressed
    - [ ] //TODO send the letter to a function called checkLetterExistsInWord()
    - [ ] //TODO create this function, probably a every() iterator, will return true or false for each element checked
        //if true - replace underscore with the letter, DO NOT increment img number
        //if false - DO increase increment of img number name to change image to next one

- [ ] //NOTE - If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
    - [ ] //TODO match letter to word[i], and replace in string array?

- [ ] //NOTE - If the letter is not in the word, an additional element to the hangman diagram should be added.
    - [x] //TODO there are eleven guesses or 'lives' - so need to keep track of how many INCORRECT guesses have been made 
    - [ ] //TODO update the image to the next if an incorrect guess is made (event listener?)

- [x] //NOTE - The game should keep track of which letters have been 'guessed' already.
    - [x] //TODO Store letters already guessed in a array to compare with following guesses

- [ ] //NOTE - The game should provide a win or loss message depending on the outcome.
    //"GAME OVER - Try again?"
    //"GAME WON - Congrats!"

- [x] //NOTE - There should be some functionality to play again.
    - [x] //TODO Create reset button
    - [x] //TODO Hide it until game is over
    - [ ] //TODO When click, should refresh the game, choose new random word

- [x] //NOTE - This should be styled to support mobile, tablet, and desktop views
    - [x] //TODO Make responsive with flexboxes.
    - [ ] //TODO Bonus - Use media queries if you have time.

## Bonus

- [ ] //NOTE - Allow keyboard input
    - [ ] //TODO Find way to link up user key input with each button on screen

- [ ] //NOTE - Keep track of words that have been used already and display them on the screen
    - [ ] //TODO  



    
