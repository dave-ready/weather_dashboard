//store city name
var cityName = $("#citySearch").val();

var currentDate = moment().format(); 

var apiKey = "42709480618f4f67c2c902c0781e5e4a";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;

//Run AJAX call to OpenWeatherMap API

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
});


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

// Create a function to search for city's weather

// append HTML search history
//"on click" for search history buttons

// create HTML elements for weather data

// add weather icon for the appropriate weather -- If/Else statement??

// UV index - api call
// if/else statement to determine color
// 5 day forecast - api call


//var weather = ;
//var temperature = ;
//var humidity = ;
//var cityName = ;
//var currentDay = ;
//var windSpeed = ;
//var uvIndex = ;
