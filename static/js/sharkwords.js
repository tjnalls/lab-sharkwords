const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
const createDivsForChars = (word) => {
  // Replace this with your code
  const wordContainer = document.querySelector('#word-container');
  for(let letter of word){
    let letterDiv =`<div class="letter-box ${letter}"></div>`
    wordContainer.insertAdjacentHTML('beforeend', letterDiv);
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".

const generateLetterButtons = () => {
  const letterContainer = document.querySelector('#letter-buttons');
  for(let letter of ALPHABET){
    letterContainer.insertAdjacentHTML('beforeend', `<button>${letter}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object

//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  return document.querySelector(`div.${letter}`) !== null;
};

const handleCorrectGuess = (letter) => {
  const letterDivs = document.querySelectorAll(`.${letter}`);
  for (let letterDiv of letterDivs) {
    letterDiv.innerText = `${letter}`;
  }
};

// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.
const handleWrongGuess = () => {
  numWrong += 1;
  let img = document.querySelector("#shark-img img");
  let imageSrc="static/images/guess"+numWrong+".png";
  img.setAttribute('src',imageSrc);
  
  if (numWrong === 5){
    let allLetterButtons = document.querySelectorAll('button')
    for (letter of allLetterButtons){
      disableLetterButton(letter);
    }
  }
  // Replace this with your code
};


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  createDivsForChars(word);


  generateLetterButtons();

    for (const button of document.querySelectorAll('button')) {
    // add an event handler to handle clicking on a letter button
    // YOUR CODE HERE
      button.addEventListener('click', () => {
        const letter = button.innerHTML;  // can also use evt.target instead of button
        
        disableLetterButton(button)

        
        if (isLetterInWord(letter)) {
          handleCorrectGuess (letter); 
        }
        else {
          handleWrongGuess (letter);
        }
        // you should disable the button so the letter can't be clicked again
        // you should then check if the currently clicked letter is in the word
      
        // if it is, call `handleCorrectGuess`
        
        // if it is not, call `handleWrongGuess`
        
    
    });
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();
