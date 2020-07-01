var city = "Austin";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a0b4760c79c35ae32efbd69412343010";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var forecastBox = $(".card-body");
    var cityRow = $("<div>");
    var tempRow = $("<div>");
    var humidityRow = $("<div>");
    var windRow = $("<div>");

    var cityItem = $("<h3>").text(response.name);
    var tempItem = $("<p>").text("Temperature: " + response.main.temp);
    var humidityItem = $("<p>").text("Humidity: " + response.main.humidity);
    var windItem = $("<p>").text("Wind Speed: " + response.wind.speed);

    cityRow.append(cityItem);
    forecastBox.append(cityRow);
    tempRow.append(tempItem);
    forecastBox.append(tempRow);
    humidityRow.append(humidityItem);
    forecastBox.append(humidityRow);
    windRow.append(windItem);
    forecastBox.append(windRow);
});

// var city = "Austin";
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=a0b4760c79c35ae32efbd69412343010";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//     console.log(queryURL)
// })
// .then(function(response) {

// Code for retrieving UV index (in progress)
    // var city = "Austin";
    // var queryURL = "https://api.openweathermap.org/data/2.5/uvi?" + city + "&appid=a0b4760c79c35ae32efbd69412343010";

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {

    // var indexRow = $("<div>");
    // var indexItem = $("<p>").text("UV Index: " + response.main.humidity);
    // indexRow.append(indexItem);
    //     forecastBox.append(indexRow);
