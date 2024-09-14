// Select DOM elements for buttons and timer display
const startBtnE1 = document.querySelector(".start");
const stopBtnE1 = document.querySelector(".stop");
const resetBtnE1 = document.querySelector(".reset");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".second");

// Initial style setup for minute display
minuteE1.style.outline = '2px solid red';

let id; // Variable to store the interval ID
let minutes; // Variable to store the number of minutes
let totalTimeInSecond; // Variable to store total time in seconds
let isStarted = false; // Flag to check if the timer is running

// Function to start the timer
function start() {
  // Only start if the timer is not already running
  if (!isStarted) {
    // Get minutes from the minute element and convert to total seconds
    minutes = +minuteE1.innerHTML;
    totalTimeInSecond = minutes * 60;
  }

  // Start the timer if minutes is greater than 0
  if (minutes > 0) {
    // Change the outline style and make minute display non-editable
    minuteE1.style.outline = '0px solid red';
    minuteE1.contentEditable = false;
    isStarted = true;

    // Set interval to update the timer every second
    id = setInterval(() => {
      totalTimeInSecond--;
      // Calculate remaining minutes and seconds
      minutes = Math.floor(totalTimeInSecond / 60);
      let seconds = totalTimeInSecond - (minutes * 60);

      // Update minute and second displays
      minuteE1.innerHTML = minutes.toString().padStart(2, 0);
      secondE1.innerHTML = seconds.toString().padStart(2, 0);

      // Stop the timer when it reaches zero
      if (totalTimeInSecond === 0) {
        clearInterval(id);
        isStarted = false;
        minuteE1.contentEditable = true;
      }
    }, 1000);
  }
}

// Add event listener to start button
startBtnE1.addEventListener('click', start);

// Function to stop the timer
function stop() {
  clearInterval(id);
}

// Add event listener to stop button
stopBtnE1.addEventListener('click', stop);

// Function to reset the timer
function reset() {
  clearInterval(id); // Clear the interval to stop the timer
  isStarted = false; // Set timer running flag to false
  minuteE1.innerHTML = "00"; // Reset minute display to "00"
  secondE1.innerHTML = "00"; // Reset second display to "00"
  minuteE1.contentEditable = true; // Make minute display editable again
  minuteE1.style.outline = '2px solid red'; // Reset the outline style
}

// Add event listener to reset button
resetBtnE1.addEventListener('click', reset);
