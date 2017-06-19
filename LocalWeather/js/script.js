//get the lat,long from ipinfo.io/json
//query the open weather api
//http://api.openweathermap.org/data/2.5/weather?lat=18.5333&lon=73.8667&APPID=061f24cf3cde2f60644a8240302983f2&units=metric
//wind direction - https://stackoverflow.com/questions/36475255/i-have-wind-direction-data-coming-from-openweathermap-api-and-the-data-is-repre

var icons = new Skycons({"color": "orange"});
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

hideAllIcons();
function hideAllIcons() {
    document.getElementById("clear-day").style.display = 'block';
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