// Selects the element with the class 'image-container' and assigns it to the variable imageContainerE1
// This element will contain the images that will be dynamically added
const imageContainerE1 = document.querySelector('.image-container');

// Selects the element with the class 'btn' and assigns it to the variable buttonE1
// This button will trigger the addition of new images when clicked
const buttonE1 = document.querySelector('.btn');

// Adds an event listener to buttonE1 that listens for the 'click' event
// When the button is clicked, the addNewImages function is called
buttonE1.addEventListener('click', () => {
    addNewImages();
});

// Function to create and add new images to the imageContainerE1 element
function addNewImages(){
    let random = 0; // Variable to store a random number for image URL
    let newImgE1 = ''; // Variable to store the newly created image element
    
    // Loop to add 10 new images
    for(let i = 0; i < 10; i++){
        // Generate a random number between 1 and 2000
        random = Math.ceil(Math.random() * 2000);
        
        // Create a new 'img' element
        newImgE1 = document.createElement('img');
        
        // Set the source of the new image to a URL with the random number
        newImgE1.src = `https://picsum.photos/300?random=${random}`;
        
        // Append the newly created image element to the imageContainerE1 element
        imageContainerE1.appendChild(newImgE1);
    }
}
