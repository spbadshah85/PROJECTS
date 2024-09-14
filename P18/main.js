// Select all elements with the class "counter"
const countersEl = document.querySelectorAll(".counter");

// Iterate over each counter element
countersEl.forEach((counterEl) => {
  // Set the initial text of each counter to "0"
  counterEl.innerText = "0";

  // Call the incrementCounter function to start the animation
  incrementCounter();

  // Function to increment the counter
  function incrementCounter() {
    // Convert the current displayed number to a number (from string)
    let currentNum = +counterEl.innerText;

    // Get the target number from the 'data-ceil' attribute of the element
    const dataCeil = counterEl.getAttribute("data-ceil");

    // Calculate the increment value based on the target divided by 15 (adjust for speed)
    const increment = dataCeil / 15;

    // Increment the current number and round it up to the nearest integer
    currentNum = Math.ceil(currentNum + increment);

    // If the current number is still less than the target (dataCeil):
    if (currentNum < dataCeil) {
      // Update the innerText of the counter element with the new number
      counterEl.innerText = currentNum;

      // Use setTimeout to call incrementCounter again after 50 milliseconds, creating an animation effect
      setTimeout(incrementCounter, 50);
    } else {
      // Once the counter reaches or exceeds the target, set it to the target value
      counterEl.innerText = dataCeil;
    }
  }
});
