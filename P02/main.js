// Selects the element with the class 'container' and assigns it to the variable containerF1
// This is where the text animation will be displayed
const containerF1 = document.querySelector('.container');

// Array containing different career titles to be displayed in the animation
const careers = ['YouTuber', 'WebDeveloper', 'Freelancer', 'Engineer'];

// Variable to keep track of the current character index for the text animation
let characterIndex = 0;

// Variable to keep track of the current career index from the careers array
let careersIndex = 0;

// Function to update the displayed text in the container element
function updateText(){
    // Increment the character index to show the next character in the career title
    characterIndex++;
    
    // Update the HTML inside the container element with the current career title
    // Uses a conditional to choose between 'a' and 'an' based on the first letter of the career title
    containerF1.innerHTML = `
        <h1>I am ${careers[careersIndex].slice(0,1) === 'E' ? 'an' : 'a'} ${careers[careersIndex].slice(0,characterIndex)}</h1>
    `;
    
    // Check if the full length of the current career title has been displayed
    if(characterIndex === careers[careersIndex].length){
        // Move to the next career title in the array
        careersIndex++;
        // Reset the character index for the next career title
        characterIndex = 0;
    }
    
    // If all career titles have been displayed, reset to the first career title
    if(careersIndex === careers.length){
        careersIndex = 0;
    }
    
    // Set a timeout to call the updateText function again after 400 milliseconds
    // This creates the effect of typing out the career titles
    setTimeout(updateText, 400);
}

// Initial call to start the text animation
updateText();
