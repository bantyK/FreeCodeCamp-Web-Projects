$(document).ready(function () {

    var icons = new Skycons({
        "color": "orange"
    });

    var button = document.getElementById("submit_button");
    button.addEventListener("click", function (event) {
        buttonClicked();
    });
    setIcons(icons);
    hideAllIcons();
    getCurrentLocation();

});

function buttonClicked() {
    var locationEntered = document.getElementById("location_input").value;
    getDataForLocation(locationEntered);
}

function setIcons(icons) {
    icons.set("clear-day", Skycons.CLEAR_DAY);
    icons.set("clear-night", Skycons.CLEAR_NIGHT);
    icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
    icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
    icons.set("cloudy", Skycons.CLOUDY);
    icons.set("rain", Skycons.RAIN);
    icons.set("sleet", Skycons.SLEET);
    icons.set("snow", Skycons.SNOW);
    icons.set("wind", Skycons.WIND);
    icons.set("fog", Skycons.FOG);
    icons.play();
}
function getCurrentLocation() {
    $.ajax({
        url: "http://ipinfo.io/json",
        cache: false,
        success: function (data) {
            getWeatherDataForCoordinates(data);
        }
    });
}

function getWeatherDataForCoordinates(data) {
    var latitude = data.loc.split(",")[0];
    var longitude = data.loc.split(",")[1];
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=061f24cf3cde2f60644a8240302983f2&units=metric";
    console.log(weatherURL);
    $.ajax({
        url: weatherURL,
        success: function (response) {
            console.log(response);
            updateUI(response, data);
        }
    });
}

function getDataForLocation(location) {
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=061f24cf3cde2f60644a8240302983f2";
    $.ajax({
        url: apiURL,
        success: function (response) {
            updateUI(response, location);
        }
    });
}

function updateUI(response, data) {
    displayWeatherIcon(response.weather[0].main.toLowerCase());
    document.getElementById("temp").innerHTML = response.main.temp;
    if (data.constructor === "".constructor) {
        document.getElementById("place").innerHTML = data;
    } else {
        document.getElementById("place").innerHTML = data.city + ", " + data.country;
    }
    document.getElementById("summary").innerHTML = toTitleCase(response.weather[0].description);
    document.getElementById("humidity").innerHTML = calculateWindDirection(response.wind.deg) + " " + response.wind.speed + " m/s";

}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function calculateWindDirection(degree) {
    if (degree > 337.5) return 'N';
    if (degree > 292.5) return 'NW';
    if (degree > 247.5) return 'W';
    if (degree > 202.5) return 'SW';
    if (degree > 157.5) return 'S';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'E';
    if (degree > 22.5) {
        return 'NE';
    }
    return 'N';
}

function hideAllIcons() {
    document.getElementById("clear-day").style.display = 'none';
    document.getElementById("clear-night").style.display = 'none';
    document.getElementById("partly-cloudy-day").style.display = 'none';
    document.getElementById("partly-cloudy-night").style.display = 'none';
    document.getElementById("cloudy").style.display = 'none';
    document.getElementById("rain").style.display = 'none';
    document.getElementById("sleet").style.display = 'none';
    document.getElementById("snow").style.display = 'none';
    document.getElementById("wind").style.display = 'none';
    document.getElementById("fog").style.display = 'none';
}

function displayWeatherIcon(iconClass) {
    document.getElementById(iconClass).style.display = 'block';
}