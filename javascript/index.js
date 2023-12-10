
//Los Angeles city 
function updateTime(){
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");



losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
//1.This is an option to show the time:
//losAngelesTimeElement.innerHTML = `${losAngelesTime.format(`h:mm:ss`)}<small>${losAngelesTime.format("A")}</small>`;

//2.This is another option to show the time:
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);


//London city
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format(
  "h:mm:ss [<small>]A[</small>]"
);


//Brusells city 
let brusselsElement = document.querySelector("#brussels");
let brusselsDateElement = brusselsElement.querySelector(".date");
let brusselsTimeElement = brusselsElement.querySelector(".time");
let brusselsTime = moment().tz("Europe/Brussels");

brusselsDateElement.innerHTML = moment().format("MMMM Do YYYY");
brusselsTimeElement.innerHTML = brusselsTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
};

updateTime();
setInterval(updateTime, 1000);



function updateCity(event){
let cityTimeZone = event.target.value;
let cityName = cityTimeZone.replace("_", " ");
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `
<div class="city" > 
<div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")} </div>
</div>
<div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
  "A"
)}</small> </div>
</div>


`;
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);













//Los Angeles city 
//setInterval(function(){
//let losAngelesElement = document.querySelector("#los-angeles");
//let losAngelesDateElement = losAngelesElement.querySelector(".date");
//let losAngelesTimeElement = losAngelesElement.querySelector(".time");
//let losAngelesTime = moment().tz("America/Los_Angeles");



//losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
//1.This is an option to show the time:
//losAngelesTimeElement.innerHTML = `${losAngelesTime.format(`h:mm:ss`)}<small>${losAngelesTime.format("A")}</small>`;

//2.This is another option to show the time:
//losAngelesTimeElement.innerHTML = losAngelesTime.format(
//"h:mm:ss [<small>]A[</small>]"
//);
//}, 1000);


//London city
//setInterval(function(){
//let londonElement = document.querySelector("#london");
//let londonDateElement = londonElement.querySelector(".date");
//let londonTimeElement = londonElement.querySelector(".time");
//let londonTime = moment().tz("Europe/London");

//londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
//londonTimeElement.innerHTML = londonTime.format(
//  "h:mm:ss [<small>]A[</small>]"
//);
//}, 1000);


//Brusells city 
//setInterval(function(){
//let brusselsElement = document.querySelector("#brussels");
//let brusselsDateElement = brusselsElement.querySelector(".date");
//let brusselsTimeElement = brusselsElement.querySelector(".time");
//let brusselsTime = moment().tz("Europe/Brussels");

//brusselsDateElement.innerHTML = moment().format("MMMM Do YYYY");
//brusselsTimeElement.innerHTML = brusselsTime.format(
//  "h:mm:ss [<small>]A[</small>]"
//);
//}, 1000);



//function updateCity(event){
//let cityTimeZone = event.target.value;
//let cityTime = moment().tz(cityTimeZone);
//let citiesElement = document.querySelector("#cities");
//citiesElement.innerHTML = "Hello";
//}


//let citiesSelectElement = document.querySelector("#city");
//citiesSelectElement.addEventListener("change", updateCity);
