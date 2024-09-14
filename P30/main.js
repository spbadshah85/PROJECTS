// Get the <time> element by its ID "year"
const year = document.getElementById("year")

// Get the current year from the Date object
const thisYear = new Date().getFullYear()

// Set the "datetime" attribute of the <time> element to the current year
year.setAttribute("datetime", thisYear)

// Update the text content of the <time> element to display the current year
year.textContent = thisYear
