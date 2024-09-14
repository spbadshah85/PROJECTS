// Selects the element with the class 'month' and assigns it to the variable monthE1
// This element will display the remaining months in the countdown
const monthE1 = document.querySelector('.month');

// Selects the element with the class 'day' and assigns it to the variable dayE1
// This element will display the remaining days in the countdown
const dayE1 = document.querySelector('.day');

// Selects the element with the class 'hour' and assigns it to the variable hourE1
// This element will display the remaining hours in the countdown
const hourE1 = document.querySelector('.hour');

// Selects the element with the class 'minute' and assigns it to the variable minuteE1
// This element will display the remaining minutes in the countdown
const minuteE1 = document.querySelector('.minute');

// Selects the element with the class 'second' and assigns it to the variable secondE1
// This element will display the remaining seconds in the countdown
const secondE1 = document.querySelector('.second');

// Set the target date for New Year 2025
const newYear = new Date("jan 1, 2025 00:00:00");

let currentTime; // Variable to store the current time

// Constants representing time units in milliseconds
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Function to calculate the number of full months between two dates
function calculateFullMonths(startDate, endDate) {
    let fullMonths;
    
    // Calculate the total months difference considering years as well
    fullMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    
    // Adjust for the start month and the end month
    fullMonths -= startDate.getMonth();
    fullMonths += endDate.getMonth();
    
    // If the end date's day is less than the start date's day, subtract one month
    if (endDate.getDate() < startDate.getDate()) {
        fullMonths--;
    }

    // Ensure the result is not negative, return 0 if so
    return fullMonths <= 0 ? 0 : fullMonths;
}

// Function to calculate the remaining days after the last full month
function calculateRemainingDays(startDate, endDate) {
    let lastFullMonth = new Date(startDate);
    
    // Move to the end of the last full month
    lastFullMonth.setMonth(startDate.getMonth() + calculateFullMonths(startDate, endDate));
    
    // Calculate the time difference between the end of the last full month and the end date
    let timeGap = endDate - lastFullMonth;
    
    // Return the number of remaining days
    return Math.floor(timeGap / day);
}

let fullRemainingMonths; // Store full months remaining until New Year
let remainingDaysInLastMonth; // Store remaining days in the last partial month
let remainingHours; // Store remaining hours
let remainingMinutes; // Store remaining minutes
let remainingSeconds; // Store remaining seconds

// Function to update the remaining time periodically
function updateTime() {
    currentTime = new Date(); // Get the current time
    
    // Calculate the remaining full months and days
    fullRemainingMonths = calculateFullMonths(currentTime, newYear);
    remainingDaysInLastMonth = calculateRemainingDays(currentTime, newYear);

    // Calculate the time difference in milliseconds
    let timeGap = newYear - currentTime;

    // Convert the time difference into hours, minutes, and seconds
    remainingHours = Math.floor((timeGap % day) / hour);
    remainingMinutes = Math.floor((timeGap % hour) / minute);
    remainingSeconds = Math.floor((timeGap % minute) / second);

    // Updates the inner HTML of the month element with the full number of remaining months
    monthE1.innerHTML = fullRemainingMonths;

    // Updates the inner HTML of the day element with the number of days left in the last incomplete month
    dayE1.innerHTML = remainingDaysInLastMonth;

    // Updates the inner HTML of the hour element with the number of hours remaining
    hourE1.innerHTML = remainingHours;

    // Updates the inner HTML of the minute element with the number of minutes remaining
    minuteE1.innerHTML = remainingMinutes;

    // Updates the inner HTML of the second element with the number of seconds remaining
    secondE1.innerHTML = remainingSeconds;
}

// Call updateTime every second to update the countdown values
setInterval(updateTime, 1000);