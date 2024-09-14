// Variable to store the computer's choice
let comChoise;

// Retrieve the current score from localStorage and parse it; initialize with default values if not present
let scoreStr = localStorage.getItem('Score');
let score = JSON.parse(scoreStr) || {
    win: 0,
    lose: 0,
    tie: 0,
};

// Add a method to the score object to display the current score
score.showScore = function() {
    return ` Won: ${score.win}  Lost: ${score.lose}  Tie: ${score.tie}.`;
}

// Function to reset the score to zero for all categories
function resetScore() {
    score.win = score.tie = score.lose = 0;
}

// Function to determine the result of the game based on user and computer choices
function getResult(userChoise, comChoise) {
    let result;

    // Check if both choices are the same
    if (comChoise === userChoise) {
        score.tie++; // Increment tie count
        result = `it's a tie`;
    } 
    // Check if user choice is not 'Stump' and computer choice is 'Stump'
    else if (userChoise !== 'Stump' && comChoise === 'Stump') {
        if (userChoise === 'Ball') {
            score.win++; // Increment win count
            result = 'You won!';
        } else {
            score.lose++; // Increment lose count
            result = 'Computer won!';
        }
    } 
    // Check if user choice is not 'Ball' and computer choice is 'Ball'
    else if (userChoise !== 'Ball' && comChoise === 'Ball') {
        if (userChoise === 'Bat') {
            score.win++; // Increment win count
            result = 'You won!';
        } else {
            score.lose++; // Increment lose count
            result = 'Computer won!';
        }
    } 
    // Check if user choice is not 'Bat' and computer choice is 'Bat'
    else if (userChoise !== 'Bat') {
        if (userChoise === 'Stump') {
            score.win++; // Increment win count
            result = 'You won!';
        } else {
            score.lose++; // Increment lose count
            result = 'Computer won!';
        }
    }
    return result; // Return the result of the game
}

// Function to get a random choice for the computer
function getComChoise() {
    let random = Math.ceil(Math.random() * 3); // Generate a random number between 1 and 3
    let choise; // Variable to store computer's choice
    
    // Determine computer's choice based on the random number
    if (random <= 1) {
        choise = 'Bat';
    } else if (random <= 2) {
        choise = 'Ball';
    } else {
        choise = 'Stump';
    }
    return choise; // Return the computer's choice
}

// Function to display the result of the game
function showResult(userChoise, comChoise, result) {
    // Save the current score to localStorage
    localStorage.setItem('Score', JSON.stringify(score));
    
    // Update the display with the choices and result
    document.querySelector('.display').innerHTML = `You have chosen ${userChoise}, Computer has chosen ${comChoise}. ${result}
    <br> ${score.showScore()}`;
}
