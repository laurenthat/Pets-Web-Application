'use strict';
console.log('hellooo');

const figCaptionElem = document.querySelector('figcaption');
const imageElement = document.querySelector('img');


//we save whatever comes rom pics
const getData = async () => {
    const response = await fetch('pics.json');
    console.log(response);
    //with next 2 lines we pass the JSON data
    const data = await response.json();
    console.log(data);
    figCaptionElem.innerText = data[0].name;
    imageElement.src = data[0].url;
    imageElement.alt = data[0].description;
}



getData();
//this line shows just the text
// figCaptionElem.innerText = 'This is a figcaption.';
console.log("last line of the code")


