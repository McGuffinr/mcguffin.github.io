//Get town events section information
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

let townName = document.getElementById("town-name").textContent;

fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == townName) {
      let events = towns[i].events;
      for (let i=0; i < events.length; i++) {
      let event = document.createElement('p');
      event.innerHTML = events[i];
      document.querySelector('.townEvents').appendChild(event);
      }
    }
   }
});