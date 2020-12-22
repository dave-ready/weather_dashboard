//store city name
var cityName = $("#citySearch").val();

var currentDate = moment().format(); 

var apiKey = "7fd432db80c8966a57818fd7382af9b7";
//var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
//var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=" + apiKey + "&q=" + cityName;


// Create a function to search for city's weather

function currentWeatherSearch() {

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
});

// create HTML elements for weather data

var cardEl = $("<div>").addClass("card");
var cardBodyEl = $("<div>").addClass("card-body");

var cityNameEl = $("<h3>").addClass("city-name").text(response.name);
var dateEl = cityNameEl.append(" " + currentDate);
var tempEl = $("<p>").addClass("card-text current-temp").text("Temperature:" + " " + convertF + " " + "°F");
var currentWeather = response.weather[0].main;
var windSpeedEl = $("<p>").addClass("card-text current-wind").text("Wind Speed:" + " " + response.wind.speed + " " + "MPH");
var humidityEl = $("<p>").addClass("card-text current-humidity").text("Humidity:" + " " + response.main.humidity + "%");

//Append Elements to page

cityNameEl.append(dateEl, weatherIMG);
cardBodyEl.append(cityNameEl, tempEl, humidityEl, windSpeedEl);
cardEl.append(cardBodyEl);
$("#currentWeather").append(cardEl)

// add weather icon for the appropriate weather -- If/Else statement??

if (currentWeather === "rain") {
    var weatherIMG = $("<img>").attr("src", "https://openweathermap.org/img/wn/09d.png");
        weatherIMG.attr("style", "height: 50px; width: 50px");

} else if (currentWeather=== "Clouds") {
    var weatherIMG  = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
        weatherIMG.attr("style", "height: 50px; width: 50px");

} else if (currentWeather === "Clear") {
    var weatherIMG = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
        weatherIMG.attr("style", "height: 50px; width: 50px");

} else if (currentWeather === "Drizzle") {
    var weatherIMG = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
        weatherIMG.attr("style", "height: 50px; width: 50px");

} else if (currentWeather === "Snow") {
    var weatherIMG = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
        weatherIMG.attr("style", "height: 50px; width: 50px");
}

}
//currentWeatherSearch()

//on click
$("#searchBtn").on("click", function(event) {

    //Prevent default
    event.preventDefault();

    //save to local storage
    var storageArray = [];
    var storedText = $(this).siblings("input").val();

    storageArray.push(storedText);
    localStorage.setItem("cityName", JSON.stringify(storageArray));

})



// append HTML search history
//"on click" for search history buttons



// UV index - api call
// if/else statement to determine color
// 5 day forecast - api call


//var weather = ;
//var uvIndex = ;
