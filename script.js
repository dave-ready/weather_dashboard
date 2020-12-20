var cityName = $("#citySearch").val();

var apiKey = "42709480618f4f67c2c902c0781e5e4a";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

//Run AJAX call to OpenWeatherMap API

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
});



//var weather = ;
//var temperature = ;
//var humidity = ;
//var cityName = ;
//var currentDay = ;
//var windSpeed = ;
//var uvIndex = ;
