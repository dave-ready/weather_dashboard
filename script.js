

var currentDate = moment().format("L"); 

var apiKey = "7fd432db80c8966a57818fd7382af9b7";

var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=" + apiKey + "&q=" + cityName;

//trigger search button to search for city

$("#citySearch").keypress(function(event) {

  if (event.keyCode === 13) {
    event.preventDefault();
    $("#searchBtn").click();

   }
});

//on click
$("#searchBtn").on("click", function() {

//get city name from user
var cityName = $("#citySearch").val();

//clears input field after search
$("#citySearch").val("");

var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=" + apiKey + "&q=" + cityName;

//ajax call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
    console.log(response.name)


    console.log(response.main.temp);
    console.log(response.main.humidity)
    console.log(response.wind.speed)

    currentWeatherSearch(response);
    //fiveDayForecastSearch();
    //searchHistoryList();

    });

});

// Create a function to search for city's weather

function currentWeatherSearch(response) {

$('#currentWeather').empty();

var temperature = response.main.temp;
console.log(temperature)

// create HTML elements for weather data

var cardEl = $("<div>").addClass("card");
var cardBodyEl = $("<div>").addClass("card-body");
var cityNameEl = $("<h3>").addClass("city-title").text(response.name);
var dateEl = cityNameEl.append(" " + currentDate);
var tempEl = $("<p>").addClass("card-text current-temp").text("Temperature:" + " " + temperature + " " + "°F");
var currentWeather = response.weather[0].main;
var weatherIMG = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
var windSpeedEl = $("<p>").addClass("card-text current-wind").text("Wind Speed:" + " " + response.wind.speed + " " + "MPH");
var humidityEl = $("<p>").addClass("card-text current-humidity").text("Humidity:" + " " + response.main.humidity + "%");

//empty div to hold text content
//var newDiv = $('<div>');
//newDiv.append(displayMainDate, currentIcon, tempEL, humEl, windEl);
//$("#currentCity").html(newDiv);

//Append Elements to page
cityNameEl.append(dateEl, weatherIMG);
cardBodyEl.append(cityNameEl, tempEl, humidityEl, windSpeedEl);
cardEl.append(cardBodyEl);
$("#currentWeather").append(cardEl)

} //End of currentWeatherSearch() function



// append search history to HTML - searchHistoryList() function

function searchHistoryList() {
    var searchItem = $("<li>").addClass("list-group-item").text(cityName);

}  // end of searchHistoryList() function




//save to local storage
var storageArray = [];
var storedText = $(this).siblings("input").val();

storageArray.push(storedText);
localStorage.setItem("cityName", JSON.stringify(storageArray));


//five day forecast function
// 5 day forecast - api call
//"on click" for search history buttons
// UV index - api call
// if/else statement to determine uv color

//var uvIndex = lat and lon??
