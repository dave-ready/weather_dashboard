//store city name
var cityName = $("#citySearch").val();

var currentDate = moment().format(); 

var apiKey = "42709480618f4f67c2c902c0781e5e4a";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;


// Create a function to search for city's weather

function currentWeatherSearch (response) {

//Convert temp from kelvin to fahrenheit
var convertF = (response.main.temp - 273.15) * 1.8 + 32;

//empty div to hold text content
$("#currentCity").empty();

//Run AJAX call to OpenWeatherMap API

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response);


// create HTML elements for weather data
var cardEl = $("<div>").addClass("card");
var cardBodyEl = $("<div>").addClass("card-body");

var cityNameEl = $("<h3>").addClass("city-name").text(response.name);
var dateEl = cityNameEl.append(" " + currentDate);
var tempEl = $("<p>").addClass("card-text current-temp").text("Temperature:" + " " + convertF + " " + "°F");
var currentWeather = response.weather[0].main;
var weatherIMG = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
var windSpeedEl = $("<p>").addClass("card-text current-wind").text("Wind Speed:" + " " + response.wind.speed + " " + "MPH");
var humidityEl = $("<p>").addClass("card-text current-humidity").text("Humidity:" + " " + response.main.humidity + "%");

//Append Elements to page

cityNameEl.append(dateEl, weatherIMG);
cardBodyEl.append(cityNameEl, tempEl, humidityEl, windSpeedEl);
cardEl.append(cardBodyEl);
$("#currentWeather").append(cardEl)

}
currentWeatherSearch(citySearch)

//on click
$("#searchBtn").on("click", function(event) {

    //Prevent default
    event.preventDefault();

    //save to local storage
    var storageArray = [];
    var storedText = $(this).siblings("input").val();

    storageArray.push(textContent);
    localStorage.setItem("cityName", JSON.stringify(storageArray));

})



// append HTML search history
//"on click" for search history buttons

// add weather icon for the appropriate weather -- If/Else statement??

// UV index - api call
// if/else statement to determine color
// 5 day forecast - api call


//var weather = ;
//var uvIndex = ;
