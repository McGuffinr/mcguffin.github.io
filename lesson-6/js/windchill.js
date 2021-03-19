

const t = parseFloat(document.getElementById("temp").textContent);
const s = parseFloat(document.getElementById("windspeed").textContent);


let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

document.getElementById("windchill") = Math.round(wc);

if (t <= 50 && s > 3) {
    document.getElementById("windchill").textContent = "Wind Chill is " +windchill+"\xB0F";
} else {
    document.getElementById("windchill").textContent = "No Wind Chill Today";
}