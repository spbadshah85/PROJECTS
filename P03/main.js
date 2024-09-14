// Selects the element with the class 'month' and assigns it to the variable monthE1
// This element will display the current month
const monthE1 = document.querySelector('.month');

// Selects the element with the class 'day-name' and assigns it to the variable dayNameE1
// This element will display the name of the current day of the week
const dayNameE1 = document.querySelector('.day-name');

// Selects the element with the class 'day-number' and assigns it to the variable dayNumberE1
// This element will display the current day of the month
const dayNumberE1 = document.querySelector('.day-number');

// Selects the element with the class 'year' and assigns it to the variable yearE1
// This element will display the current year
const yearE1 = document.querySelector('.year');

// Creates a new Date object representing the current date and time
const time = new Date();

// Sets the text content of monthE1 to the full name of the current month
monthE1.innerText = time.toLocaleString('en', { month: 'long' });

// Sets the text content of dayNameE1 to the full name of the current day of the week
dayNameE1.innerText = time.toLocaleString('en', { weekday: 'long' });

// Sets the text content of dayNumberE1 to the current day of the month
dayNumberE1.innerText = time.getDate();

// Sets the text content of yearE1 to the current year
yearE1.innerText = time.getFullYear();
