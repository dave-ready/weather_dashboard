var currentDate = moment().format("L"); 
var cityName = $("#citySearch").val();

var apiKey = "&appid=7fd432db80c8966a57818fd7382af9b7";

//on click
$("#searchBtn").on("click", function() {

//get city name from user
var cityName = $("#citySearch").val();


var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial" + apiKey + "&q=" + cityName;
               
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
    fiveDayForecastSearch(response);
    searchHistoryList();
}); 
    
});


// Create a function to search for city's weather

function currentWeatherSearch(response) {

$('#currentWeather').empty();

var temperature = response.main.temp;
console.log(temperature)


// create HTML elements for weather data
var weatherIcon = response.weather[0].icon;
var humidity = response.main.humidity;
var wind = response.wind.speed;
var name = response.name;

var cardEl = $("<div>").addClass("card");
var cardBodyEl = $("<div>").addClass("card-body");
var cityNameEl = $("<h3>").addClass("city-title").text(name);
var dateEl = cityNameEl.append(" " + currentDate);
var tempEl = $("<p>").addClass("card-text current-temp").text("Temperature:" + " " + temperature + " " + "°F");
var currentWeather = response.weather[0].main;
var weatherIMG = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
var windSpeedEl = $("<p>").addClass("card-text current-wind").text("Wind Speed:" + " " + wind + " " + "MPH");
var humidityEl = $("<p>").addClass("card-text current-humidity").text("Humidity:" + " " + humidity + "%");

//run api call for UV Index
var lon = response.coord.lon;
var lat = response.coord.lat;
var queryURL3 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + apiKey;
console.log(cityName)

$.ajax({
    url: queryURL3,
    method: "GET"
}).then(function(response) {
    console.log(response)
    console.log(lon);
    console.log(lat);
    console.log(response.value);
    console.log(queryURL3)
    

//if/else statement for uv index
var uvIndex = response.value;

if (uvIndex > 10) {
    color = "red";

} else if (uvIndex > 4) {
    color = "orange";

} else {
    color = "green";
}

var uvSpan = $("<span>").text(uvIndex).css("background-color", color);
var uviEl = $("<p>").text("UV Index:" + " ").append(uvSpan);
console.log(uvIndex)


//Append Elements to page
cityNameEl.append(dateEl, weatherIMG);
cardBodyEl.append(cityNameEl, tempEl, humidityEl, windSpeedEl, uviEl);
cardEl.append(cardBodyEl);
$("#currentWeather").append(cardEl)

});

} 

//Create searchHistoryList() function to save search history to local storage and append to HTML - needs debugging

function searchHistoryList() {
    var lastCity = JSON.parse(localStorage.getItem("cityName"));
    console.log(lastCity)
    var searchHistBtn = $("<button class='btn border mt-1 shadow-sm bg-white rounded' style='width: 15rem;'>");
    var searchHist = $("<ul>").text(cityName);
    searchHist.append(searchHistBtn);
    $("#searchHistory").prepend(searchHist);

//clears input field after search
$("#citySearch").val("");


}//......end of searchHistoryList() function

//function 
function fiveDayForecastSearch(response) {
var date = new Date();
var cityName = $("#citySearch").val();
var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?&units=imperial" + apiKey + "&q=" + cityName;
    console.log(queryURL2);
    console.log(cityName);

//api call for five day forecast
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {
      
      console.log(response);
      console.log(response.list);
      
     $('#fiveDays').empty();


//variable to hold the forecast
var fiveDayForecast = response.list;
console.log(fiveDayForecast);

//for loop to append 5 days
for (var i = 0; i < fiveDayForecast.length; i++) {

//create HTML elements for five day forecast
if(fiveDayForecast[i].dt_txt.indexOf("12:00:00") !== -1) {
  var temperature = fiveDayForecast[i].main.temp;
  var humidity = fiveDayForecast[i].main.humidity;
  var weatherIcon = fiveDayForecast[i].weather[0].icon
  console.log(temperature);

  var cardEl2 = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
  var cardBodyEl2 = $("<div>").addClass("card-body p-3 forecast-body");
  var dateEl2 = $("<h5>").addClass("card-title").text(date.toLocaleDateString('en-US'));
  var tempEl2 = $("<p>").addClass("card-text forecast-temp").text("temperature: " + " " + temperature + " " + "°F");
  var humidityEl2 = $("<p>").addClass("card-text forecast-humidity").text("Humidity:" + " " + humidity + "%");
  var weatherIMG2 =$("<img>").attr("src", "https://openweathermap.org/img/w/" + weatherIcon + ".png");

  //Append elements
  cardBodyEl2.append(dateEl2, weatherIMG2, tempEl2, humidityEl2);
  cardEl2.append(cardBodyEl2);
  $("#fiveDays").append(cardEl2);  
}

    }

  });

}
 






