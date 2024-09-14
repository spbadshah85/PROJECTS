// Selects the 'body' element and assigns it to the variable bodyE1
const bodyE1 = document.querySelector('body');

// Adds an event listener to the 'body' element that triggers on 'mousemove' events
bodyE1.addEventListener('mousemove', event => {
    // Gets the X coordinate of the mouse pointer relative to the 'body' element
    const xPos = event.offsetX;

    // Gets the Y coordinate of the mouse pointer relative to the 'body' element
    const yPos = event.offsetY;

    // Creates a new 'span' element to be used for the heart trail effect
    const spanE1 = document.createElement('span');

    // Sets the position of the 'span' element based on the mouse coordinates
    spanE1.style.left = xPos + 'px';
    spanE1.style.top = yPos + 'px';

    // Generates a random size for the 'span' element (up to 100 pixels)
    const size = Math.random() * 100;

    // Sets the width and height of the 'span' element based on the random size
    spanE1.style.width = size + 'px';
    spanE1.style.height = size + 'px';

    // Appends the newly created 'span' element to the 'body' element
    bodyE1.appendChild(spanE1);

    // Sets a timeout to remove the 'span' element from the 'body' after 3 seconds
    setTimeout(() => spanE1.remove(), 3000);
});
