// Array containing the testimonial data with user names, texts, and images
const testimonials = [
    {
        name: 'Emily Thompson',
        text: "I couldn't stop laughing at the hilarious jokes from funny joke! Their jokes for students are witty and entertaining, perfect for brightening up any day. As a student myself, I appreciate the fun and laughter they bring to my life.",
        image: "https://images.pexels.com/photos/14807470/pexels-photo-14807470.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: 'Emily Johnson',
        text: "funny joke has the best jokes for students! I always turn to them for a good laugh. Their humor is top-notch and never fails to brighten my day.",
        image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: 'Anna Smith',
        text: "I can't get enough of the hilarious jokes from funny joke. They always make my day brighter with their clever humor tailored for students. I highly recommend funny joke to anyone in need of a good laugh!",
        image: "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
        name: 'Emma Thompson',
        text: "I can't thank funny joke enough for their hilarious jokes for students. Their witty humor always brightens my day and brings laughter to our classroom. I highly recommend funny joke for anyone looking to add some fun and laughter to their day.",
        image: "https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
        name: 'Sarah Thompson',
        text: "I can't thank Funny Joke enough for their hilarious jokes for students! My classmates and I can't get enough of the witty humor and clever punchlines. It's been a game-changer for our study sessions! Every joke is pure gold.",
        image: "https://images.pexels.com/photos/1937434/pexels-photo-1937434.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
        name: 'Samantha Reynolds',
        text: "I can't thank funny joke enough for their hilarious jokes for students. Their witty humor always brightens up our day, making learning a delightful experience. I highly recommend funny joke for anyone looking to add some laughter to their classroom!",
        image: "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
        name: 'Samantha Miller',
        text: "As a college student, I always turn to funny joke for a good laugh. Their jokes for students are hilarious and never fail to brighten my day. I highly recommend funny joke for anyone looking to add some humor to their day.",
        image: "https://images.pexels.com/photos/2385044/pexels-photo-2385044.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
        name: 'Emily Thompson',
        text: "I couldn't stop laughing at the hilarious jokes from funny joke! Their jokes for students are witty and entertaining, perfect for brightening up any day. As a student myself, I appreciate the fun and laughter they bring to my life.",
        image: "https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
        name: 'Emily Johnson',
        text: "funny joke has the best jokes for students! I always turn to them for a good laugh. Their humor is top-notch and never fails to brighten my day.",
        image: "https://images.pexels.com/photos/19833710/pexels-photo-19833710/free-photo-of-a-young-boy-in-a-green-shirt-sitting-on-a-blue-mat.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
        name: 'Anna Smith',
        text: "I can't get enough of the hilarious jokes from funny joke. They always make my day brighter with their clever humor tailored for students. I highly recommend funny joke to anyone in need of a good laugh!",
        image: "https://images.pexels.com/photos/3926827/pexels-photo-3926827.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
];

// Initial index for the testimonial being displayed
let index = 0;

// Selects the element to display the user's image
const imageE1 = document.querySelector('.user-image');

// Selects the element to display the testimonial text
const textE1 = document.querySelector('.text');

// Selects the element to display the user's name
const usernameE1 = document.querySelector('.user-name');

// Function to update the testimonial content
function updateTestimonial(){
    // Destructures the current testimonial object based on the index
    const { name, text, image } = testimonials[index];
    
    // Updates the image, text, and user name elements with the current testimonial data
    imageE1.src = image;
    textE1.innerText = text;
    usernameE1.innerText = name;
    
    // Moves to the next testimonial
    index++;
    
    // Resets the index to 0 if it reaches the end of the testimonials array
    if(index == testimonials.length){
        index = 0;
    }
    
    // Calls the updateTestimonial function again after 10 seconds (10000 milliseconds)
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}

// Starts the testimonial update loop
updateTestimonial();
