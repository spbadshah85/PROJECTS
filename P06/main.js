// Selects the element with the class 'outer' and assigns it to the variable outerE1
// This element is the container for the dark mode toggle button
const outerE1 = document.querySelector('.outer');

// Selects the element with the class 'circle' and assigns it to the variable circleE1
// This element represents the circular part of the toggle switch
const circleE1 = document.querySelector('.circle');

// Selects the body element and assigns it to the variable bodyE1
// This will be used to change the background color of the page
const bodyE1 = document.querySelector('body');

// Retrieves the dark mode state from localStorage, or defaults to false if not set
let isDark = JSON.parse(localStorage.getItem('isDark')) || false;

// Calls the function to update the page's appearance based on the current dark mode state
updateOnLoad();

// Adds an event listener to outerE1 that listens for the 'click' event
// When the outerE1 element (the toggle button) is clicked, it updates the dark mode state
outerE1.addEventListener('click', () => {
    // Calls the function to update the appearance based on the new dark mode state
    updateOnClick();
    // Saves the current dark mode state to localStorage
    localStorage.setItem('isDark', JSON.stringify(isDark));
});

// Function to update the appearance of the page based on the current dark mode state
function updateOnClick() {
    if (!isDark) {
        // Applies dark mode styles if not currently in dark mode
        circleE1.classList.add('toggleOn');
        bodyE1.style.background = 'black';
        outerE1.style.background = 'white';
        circleE1.style.background = 'black';
        isDark = true; // Sets the dark mode state to true
    } else {
        // Reverts to light mode styles if currently in dark mode
        circleE1.classList.remove('toggleOn');
        bodyE1.style.background = 'white';
        outerE1.style.background = 'lightgrey';
        circleE1.style.background = 'white';
        isDark = false; // Sets the dark mode state to false
    }
}

// Function to initialize the appearance of the page based on the stored dark mode state
function updateOnLoad() {
    if (isDark) {
        // Applies dark mode styles if the dark mode state is true
        circleE1.classList.add('toggleOn');
        bodyE1.style.background = 'black';
        outerE1.style.background = 'white';
        circleE1.style.background = 'black';
    } else {
        // Applies light mode styles if the dark mode state is false
        circleE1.classList.remove('toggleOn');
        bodyE1.style.background = 'white';
        outerE1.style.background = 'lightgrey';
        circleE1.style.background = 'white';
    }
}
