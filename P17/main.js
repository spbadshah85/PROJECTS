// Select the button, date input, and result elements from the DOM
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// Function to calculate age when the button is clicked
function calculateAge() {
  // Get the value from the date input field
  const birthdayValue = birthdayEl.value;
  
  // Check if the date input is empty and show an alert if it is
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    // Calculate the age based on the input value
    const age = getAge(birthdayValue);
    // Display the calculated age in the result element
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

// Function to calculate the age from the given birthday
function getAge(birthdayValue) {
  // Get the current date
  const currentDate = new Date();
  // Create a Date object for the provided birthday
  const birthdayDate = new Date(birthdayValue);
  // Calculate the initial age difference in years
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  // Calculate the month difference
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  // Adjust age if the current month is before the birth month
  // or if it is the same month but the current day is before the birth day
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  // Return the calculated age
  return age;
}

// Add an event listener to the button to call calculateAge function when clicked
btnEl.addEventListener("click", calculateAge);
