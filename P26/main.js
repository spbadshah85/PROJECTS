const videoList = [
    {
        title: "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
        channel: "CodeWithHarry",
        views: 2555687,
        duration: "31:19",
        thaimnail: "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ",
        time: {
            day: null,
            month: 11,
            year: null,
        }
    }
];
function totalTime(time){
    if(time.day)
        return `${time.day} day`;
    else if(time.month)
        return `${time.month} months`;
    else
    return `${time.year} years`;
}
let {title, channel, views, duration, thaimnail, time} = videoList[0];
let old = totalTime(time);

const container = document.querySelector('.container')
let number = 1;

function createCard(title, channel, views, duration, thaimnail, old){
    // card
    const card = getElement('div', 'card');
    // card chileNodes
    card.appendChild(getElement('span', 'number'));
    card.appendChild(getElement('div', 'img-con'));
    card.appendChild(getElement('div', 'detail-con'));
    card.appendChild(getElement('div', 'svg'));
    // card number
    card.childNodes[0].innerHTML = number++;
    // card image
    const cardImage = card.childNodes[1];
    cardImage.appendChild(getElement('img', 'thaimnail'));
    cardImage.childNodes[0].src = thaimnail;
    cardImage.appendChild(getElement('p', 'duration'));
    cardImage.childNodes[1].appendChild(document.createTextNode(duration));
    // card details
    const cardDetails = card.childNodes[2];
    cardDetails.appendChild(getElement('p', 'title'));
    cardDetails.appendChild(getElement('div', 'detail'));
    cardDetails.childNodes[0].appendChild(document.createTextNode(title));
    cardDetails.childNodes[1].appendChild(document.createElement('p'));
    cardDetails.childNodes[1].childNodes[0].appendChild(document.createTextNode(`${channel} ${2}M ${old} ago`));
    // card SVG
    const cardSVG = card.childNodes[3];
    cardSVG.innerHTML = `<svg width="80px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff" class="bi bi-three-dots-vertical"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>`
    console.log(cardSVG);
    return card;
}
container.appendChild(createCard(title, channel, views, duration, thaimnail, old));
document.querySelector('button').addEventListener('click', () => {
    container.appendChild(createCard(title, channel, views, duration, thaimnail, old));
})
function getElement(elementName, className){
    const element = document.createElement(elementName);
    element.classList.add(className);
    return element;
}
