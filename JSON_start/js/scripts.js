const todayDate = new Date();

const dayNumber = todayDate.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6e7bd40e8ca3eb7510e79f20646a0157&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);

    const icon_path ="//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function




 let forcastDayNumber = dayNumber;

 for (i = 0; i < forcastList.length; i++) {
   var time = forcastList[i].dt_txt;
   if (time.includes('21:00:00')) {

   }
 }

