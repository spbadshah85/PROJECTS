// Select the button element with the class 'btn'
const btnE1 = document.querySelector('.btn');

// Add a mouseover event listener to the button
btnE1.addEventListener('mouseover', event => {
    // Calculate the position of the mouse relative to the button
    const x = (event.pageX - btnE1.offsetLeft);
    const y = (event.pageY - btnE1.offsetTop);
    
    // Set CSS custom properties to position an effect (e.g., a hover effect) based on mouse position
    btnE1.style.setProperty("--xPos", x + 'px');
    btnE1.style.setProperty("--yPos", y + 'px');
});

// Select the form container element, user input field, play button text, previous guess display, attempts left display, and error message display
const formE1 = document.querySelector('.container');
const userInputE1 = document.querySelector("#user-input");
const playButtonE1 = document.querySelector(".btn-text");
const previousGuessE1 = document.querySelector(".prev-guess");
const attemptsLeftE1 = document.querySelector(".attempts-left");
const errorMessageE1 = document.querySelector(".error");

// Initialize variables for game state
let randomNumber = 0; // Stores the random number to guess
let isStarted = false; // Flag to check if the game has started
let attemptsLeft = 10; // Number of attempts left
let lastGuess = 0; // Stores the last guess
let secondLastGuess = 0; // Stores the second last guess

// Add a submit event listener to the form
formE1.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Start a new game if it hasn't started yet
    if (!isStarted) newGame();
    
    // Validate the user's guess
    validateGuess(userInputE1.value);
});

// Function to start a new game
function newGame() {
    // Generate a new random number between 1 and 100
    randomNumber = Math.ceil(Math.random() * 100);
    attemptsLeft = 10; // Reset attempts left
    attemptsLeftE1.innerText = attemptsLeft; // Display attempts left
    isStarted = true; // Set the game as started
    lastGuess = 0; // Reset last guess
    secondLastGuess = 0; // Reset second last guess
}

// Function to validate the user's guess
function validateGuess(userGuess) {
    let guess = userGuess.trim(); // Trim any whitespace from the guess
    
    // Check if the guess is not a number or is an empty string
    if (isNaN(guess) || guess === '') {
        displayAfterValidation('Enter a valid number');
    } else {
        const guessNum = parseInt(guess); // Convert the guess to an integer
        
        // Check if the guess is not within the range of 1 to 100
        if (!(guessNum > 0 && guessNum < 101)) {
            displayAfterValidation('Enter a number between 1 to 100');
        } else {
            // Check the guess and provide feedback
            checkGuessForResult(guessNum);
        }
    }
}

// Function to display an error message after validation
function displayAfterValidation(errorMessage) {
    errorMessageE1.innerText = errorMessage; // Display the error message
    userInputE1.value = ''; // Clear the user input field
}

// Function to check the result of the user's guess
function checkGuessForResult(guess) {
    lastGuess = guess; // Update the last guess
    
    // Provide feedback based on the guess compared to the random number
    if (guess > randomNumber) {
        displayAfterChecking('Lower');
    } else if (guess < randomNumber) {
        displayAfterChecking('Higher');
    } else {
        displayAfterChecking("Play Again");
    }
}

// Function to display the result or update the game state after checking the guess
function displayAfterChecking(message) {
    playButtonE1.innerText = message; // Display the feedback message
    errorMessageE1.innerText = ''; // Clear any previous error messages
    userInputE1.value = ''; // Clear the user input field

    // Check if the user has run out of attempts or guessed the number correctly
    if (attemptsLeft === 0) {
        previousGuessE1.innerText = `You Lost`; // Display loss message
        isStarted = false; // End the game
    } else if (randomNumber === lastGuess) {
        previousGuessE1.innerText = `You Won [${lastGuess}]`; // Display win message
        isStarted = false; // End the game
    } else {
        // Display the previous guesses
        previousGuessE1.innerText = `Previous Guess: [${secondLastGuess} ${lastGuess}]`;
    }
    
    // Update the second last guess with the last guess
    if (randomNumber !== lastGuess) {
        secondLastGuess = lastGuess;
    }
    
    // Decrement attempts left and update the display
    if (attemptsLeft !== 0) {
        attemptsLeftE1.innerText = --attemptsLeft;
    }
    
    // If attempts have run out, display "Play Again"
    if (attemptsLeft === 0) {
        displayAfterChecking('Play Again');
    }
}
