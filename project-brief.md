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

- [ ] A game should start with a word being randomly selected.
- [ ] A representation of the word made up of underscore (_) characters should display on the screen.
- [x] Create a user interface made up of buttons representing all 26 letters of the alphabet.
- [ ] Clicking a button should register its letter as a 'guess'
- [ ] If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
- [ ] If the letter is not in the word, an additional element to the hangman diagram should be added.
- [ ] The game should keep track of which letters have been 'guessed' already.
- [ ] The game should provide a win or loss message depending on the outcome
- [ ] There should be some functionality to play again.
- [x] This should be styled to support mobile, tablet, and desktop views

## Bonus

- [ ] Allow keyboard input
- [ ] Keep track of words that have been used already and display them on the screen

---

//NOTE -  ## MVP

//1.NOTE Styling, HTML Elements:
    //// A representation of the word made up of underscore (_) characters should display on the screen.
    //// Create a user interface made up of buttons representing all 26 letters of the alphabet.
    //// This should be styled to support mobile, tablet, and desktop views 

//2.Functionality:

//NOTE A game should start with a word being randomly selected.




//NOTE -  Clicking a button should register its letter as a 'guess'



    //remove the letter button that was pressed
    //sends the letter to a function called CheckLetterExistsinWord()
        // probably a every() iterator, will return true or false for each element checked
            //if true - replace underscore with the letter, DO NOT increment img number
            //if false - DO increase increment of img number name to change image to next one

//NOTE -  If the letter is not in the word, an additional element to the hangman diagram should be added.
    //there are eleven guesses or 'lives' - so need to keep track of how many INCORRECT guesses have been made, and update the image to the next if an incorrect guess is made (event listener?)

//NOTE  If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
    //match letter to word[i], and replace in string array?

//NOTE The game should keep track of which letters have been 'guessed' already.
    //idea- hide the button after selected

//NOTE The game should provide a win or loss message depending on the outcome
    //"GAME OVER - Try again?"
    //"GAME WON - Congrats!"

//NOTE There should be some functionality to play again.
    //refresh button appears along with message
    //"NEW GAME"


//NOTE -  ## Bonus

// Allow keyboard input
// Keep track of words that have been used already and display them on the screen



    
