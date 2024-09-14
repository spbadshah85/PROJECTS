// Select the main container element that holds both split sections
const containerEl = document.querySelector(".container");

// Select the left section of the landing page
const leftEl = document.querySelector(".left");

// Select the right section of the landing page
const rightEl = document.querySelector(".right");

// Add an event listener to the left section for when the mouse enters
leftEl.addEventListener("mouseenter", () => {
  // Add the 'active-left' class to the container element when the mouse enters the left section
  containerEl.classList.add("active-left");
});

// Add an event listener to the left section for when the mouse leaves
leftEl.addEventListener("mouseleave", () => {
  // Remove the 'active-left' class from the container element when the mouse leaves the left section
  containerEl.classList.remove("active-left");
});

// Add an event listener to the right section for when the mouse enters
rightEl.addEventListener("mouseenter", () => {
  // Add the 'active-right' class to the container element when the mouse enters the right section
  containerEl.classList.add("active-right");
});

// Add an event listener to the right section for when the mouse leaves
rightEl.addEventListener("mouseleave", () => {
  // Remove the 'active-right' class from the container element when the mouse leaves the right section
  containerEl.classList.remove("active-right");
});
