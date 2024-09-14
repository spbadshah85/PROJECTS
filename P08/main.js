// Select the textarea element by its class name
const textareaE1 = document.querySelector(".textarea");
// Select the element that will display the total character count
const totalCounterE1 = document.querySelector(".total");
// Select the element that will display the remaining character count
const remainingE1 = document.querySelector(".remaining");

// Call the function to initialize the character counts when the page loads
updateCounter();

// Add an event listener to the textarea that triggers the updateCounter function on every keyup event
textareaE1.addEventListener("keyup", () => updateCounter());

// Function to update the character count displays
function updateCounter() {
    // Update the total character count based on the current value of the textarea
    totalCounterE1.innerText = textareaE1.value.length;
    // Update the remaining character count by subtracting the total length from the maximum length attribute
    remainingE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}
