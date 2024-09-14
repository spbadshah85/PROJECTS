
// Select all elements with the class 'button' and store them in a variable called 'buttons'
const buttons = document.querySelectorAll('.button');

// Select the body element to modify its background color later
const body = document.querySelector('body');

// Iterate over each button element
buttons.forEach(function (button) {
  // Log each button element to the console to confirm the selection

  // Add a click event listener to each button
  button.addEventListener('click', function (e) {
    // Log the event object to inspect the details of the click

    // Log the element that triggered the event (the clicked button)

    // Check if the button clicked has the id 'grey'
    if (e.target.id === 'grey') {
      // Change the body's background color to grey
      body.style.backgroundColor = e.target.id;
    }

    // Check if the button clicked has the id 'white'
    if (e.target.id === 'white') {
      // Change the body's background color to white
      body.style.backgroundColor = e.target.id;
    }

    // Check if the button clicked has the id 'blue'
    if (e.target.id === 'blue') {
      // Change the body's background color to blue
      body.style.backgroundColor = e.target.id;
    }

    // Check if the button clicked has the id 'yellow'
    if (e.target.id === 'yellow') {
      // Change the body's background color to yellow
      body.style.backgroundColor = e.target.id;
    }
  });
});
