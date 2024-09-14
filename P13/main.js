// Selects the input element with the class 'input' and stores it in the variable inputE1
const inputE1 = document.querySelector(".input");

// Selects the magnifier image element (search icon) and stores it in the variable magnifierE1
const magnifierE1 = document.querySelector(".magnifier");

// Selects the microphone image element and stores it in the variable micE1
const micE1 = document.querySelector(".mic");

// Selects the container div that wraps all elements and stores it in the variable containerE1
const containerE1 = document.querySelector(".container");

// Logs the container element to the console for debugging purposes
console.log(containerE1);

// Adds an event listener to the magnifier (search icon) that listens for a 'click' event
magnifierE1.addEventListener("click", () => {
  // Toggles the 'active' class on the container element when the magnifier icon is clicked
  // This can be used to trigger animations or changes in the appearance of the search bar
  containerE1.classList.toggle("active");
});