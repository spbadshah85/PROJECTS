// Selects the element with the class 'image-container' and assigns it to the variable imageContainerE1
// This element contains the images that will be rotated
const imageContainerE1 = document.querySelector('.image-container');

// Selects the 'prev' button by its ID and assigns it to the variable prevE1
// This button will be used to rotate the gallery to the previous set of images
const prevE1 = document.querySelector('#prev');

// Selects the 'next' button by its ID and assigns it to the variable nextE1
// This button will be used to rotate the gallery to the next set of images
const nextE1 = document.querySelector('#next');

// Logs the image container element to the console for debugging purposes
console.log(imageContainerE1);

// Initializes a variable 'deg' to keep track of the current rotation degree
let deg = 0;

// Adds a click event listener to the 'prev' button
prevE1.addEventListener('click', () => {
    // Increases the rotation degree by 45 degrees when the 'prev' button is clicked
    deg += 45;
    // Clears any existing rotation timeout to prevent multiple concurrent animations
    clearInterval(id);
    // Updates the gallery rotation
    updateGallery();
});

// Defines the function 'updateGallery' to apply the rotation transformation to the image container
function updateGallery(){
    // Applies a 3D rotation transformation to the image container using CSS
    imageContainerE1.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
    // Sets a timeout to automatically rotate back by 45 degrees after 3 seconds
    id = setTimeout(() => {
        // Decreases the rotation degree by 45 degrees
        deg -= 45;
        // Updates the gallery rotation again
        updateGallery();
    }, 3000);
}

// Adds a click event listener to the 'next' button
nextE1.addEventListener('click', () => {
    // Decreases the rotation degree by 45 degrees when the 'next' button is clicked
    deg -= 45;
    // Clears any existing rotation timeout to prevent multiple concurrent animations
    clearTimeout(id);
    // Updates the gallery rotation
    updateGallery();
});

// Initializes the gallery rotation by calling 'updateGallery' for the first time
updateGallery();
