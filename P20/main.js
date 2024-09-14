// Select the element with the ID 'clock' where the time will be displayed
const clock = document.getElementById('clock');

// Use setInterval to repeatedly execute the function every 1000 milliseconds (1 second)
setInterval(function () {
  // Create a new Date object representing the current date and time
  let date = new Date();

  // Update the innerHTML of the 'clock' element with the current time in a human-readable format
  // toLocaleTimeString() returns the time portion of the date based on the user's locale
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
