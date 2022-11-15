"use strict";
const apiUrl = "https://api.tvmaze.com/search/shows?q=";
//get reference to DOM elements
const form = document.querySelector("#search-form");
const button = form.querySelector("button");
const input = form.querySelector("input");
const results = document.querySelector("#results");

button.addEventListener("click", (event) => {
  //preventDefault stopps the page from refreshing the page when pressing a button. Do not submit the form to anywhere(no page refresh)
  event.preventDefault();
  //this one stops traveling through the tree. Prevent the generic event listener at the bottom.
  event.stopPropagation();
  //read something from the box next to the button
  // const queryParam = input.value;

  if (input.value.length > 1) {
    getTVSeriesData(input.value);
  }
  // console.log('button clicked, input value', queryParam);
});

//to be able to show the results. For this we need to create a new element.
const renderResults = (data) => {
  //now when we search for a show and press multiple times on go it show's the same show multiple times. This line keeps the result in one line.
  results.innerHTML = "";
  //loop through all search results
  for (let i = 0; i < data.length; i++) {
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    const summary = (data[i].show.summary != null) ? data[i].show.summary : "<br><br>" + "No summary available" + "<br><br>";
    const officialSite = (data[i].show.officialSite != null) ? data[i].show.officialSite : "No official site available" + "<br><br>";
    const genres = (data[i].show.genres != "") ? data[i].show.genres.join(" | ") : "This show does not have a genre";

    //shows the data from the first item. There is a property show and inside it a property called name.
    h3.textContent = data[i].show.name;

    h4.innerHTML = genres + summary + officialSite;

    const img = document.createElement("img");
   
    if (data[i].show.image != null) {
      img.src = data[i].show.image.medium;
    } else {
        img.src = "http://placekitten.com/210/295";
    }
    //and now to actually show it on the screen we use the "results" from the div in html. On top of that we need to renderResults for the data.
    results.append(h3);
    results.append(img);
    results.append(h4);
    //TODO: render more data from the results
  }
};

const getTVSeriesData = async (name) => {
  try {
    const response = await fetch(apiUrl + name);
    const data = await response.json();
    console.log("results:", data);
    renderResults(data);
  } catch (error) {
    console.log("network failure:", error);
  }
};

//generic event handling example
document.addEventListener("click", (event) => {
  console.log("mouse clicked somewhere on the page", event);
});
