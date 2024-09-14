// Select HTML elements where the time will be displayed
const hourE1 = document.getElementById('hour'); // Element for hours
const minuteE1 = document.getElementById('minute'); // Element for minutes
const secondE1 = document.getElementById('second'); // Element for seconds
const ampmE1 = document.getElementById('ampm'); // Element for AM/PM indicator

// Function to update the clock
function updateClock() {
    // Get current time from the Date object
    let h = new Date().getHours(); // Get hours (24-hour format)
    let m = new Date().getMinutes(); // Get minutes
    let s = new Date().getSeconds(); // Get seconds
    let ampm = "am"; // Default value for AM/PM

    // Convert to 12-hour format and set AM/PM
    if (h >= 12) {
        ampm = "pm"; // Set AM/PM based on the hour
        if (h > 12) {
            h -= 12; // Convert from 24-hour to 12-hour format
        }
    } else if (h === 0) {
        h = 12; // Handle midnight case (0 hours should be 12 AM)
    }

    // Format hours, minutes, and seconds to always have two digits
    h = h < 10 ? "0" + h : h; // Add leading zero if necessary
    m = m < 10 ? "0" + m : m; // Add leading zero if necessary
    s = s < 10 ? "0" + s : s; // Add leading zero if necessary

    // Update the HTML elements with the formatted time
    hourE1.innerText = h; // Display hours
    minuteE1.innerText = m; // Display minutes
    secondE1.innerText = s; // Display seconds
    ampmE1.innerText = ampm; // Display AM/PM
}

// Call the updateClock function every second to keep the clock current
setInterval(() => {
    updateClock(); // Update the clock display
}, 1000); // Interval time in milliseconds (1000ms = 1 second)
