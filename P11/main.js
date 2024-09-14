const containerE1 = document.querySelector('.container');

for (let colorContainer = 0 ; colorContainer < 30 ; colorContainer++) {
    containerE1.appendChild(createColorContainer());
}

function createColorContainer(){
    const divE1 = document.createElement('div');
    divE1.classList.add("color-container");
    return divE1;
}

setColorCode();

function setColorCode(){
    containerE1.childNodes.forEach((colorContainer) => {
        let colorCode = createColorCode();
        colorContainer.style.background = "#" + colorCode;
        let innerHtml = document.createTextNode("#" + colorCode);
        colorContainer.appendChild(innerHtml);
    });
}

function createColorCode(){
    const Numbers = "0123456789abcdef";
    let colorCode = "";
    for (let code = 0 ; code < 6 ; code++) {
        const number = Math.floor(Math.random() * Numbers.length);
        colorCode += Numbers.substring(number, number + 1);
    }
    console.log(colorCode)
    return colorCode;
}
