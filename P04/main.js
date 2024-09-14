// Selects the element with the class 'btn' and assigns it to the variable btnE1
// This element is the button that will have the ripple effect
const btnE1 = document.querySelector('.btn');

// Adds an event listener to btnE1 that listens for the 'mouseover' event
// This event triggers when the mouse pointer moves over the button
btnE1.addEventListener('mouseover', event => {
    // Calculates the X coordinate of the mouse pointer relative to the button's left edge
    const x =  (event.pageX - btnE1.offsetLeft);
    
    // Calculates the Y coordinate of the mouse pointer relative to the button's top edge
    const y =  (event.pageY - btnE1.offsetTop);
    
    // Sets a CSS custom property (variable) '--xPos' on btnE1 to the calculated X coordinate value
    // This property will be used in CSS to position the ripple effect
    btnE1.style.setProperty("--xPos", x + 'px');
    
    // Sets a CSS custom property (variable) '--yPos' on btnE1 to the calculated Y coordinate value
    // This property will be used in CSS to position the ripple effect
    btnE1.style.setProperty("--yPos", y + 'px');
});
