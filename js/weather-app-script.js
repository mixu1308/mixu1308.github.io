var API_KEY = "0565691b2796155e1659ba408cb5e3cf";
var far = false;
var wd;
var loc;

function displayTemp(num, f) {
  if (f) return Math.round((num * 1.8) + 32) + "°F";
  return Math.round(num) + "°C";
}

function render(wd) {
  var currentLocation = wd.name;

  var currentWeather = wd.weather[0].description;
  var currentTemp = displayTemp(wd.main.temp, far);
  var tempHigh = displayTemp(wd.main.temp_max, far);
  var tempLow = displayTemp(wd.main.temp_min, far);
  var icon = wd.weather[0].icon;

  $('#currentLocation').html(currentLocation);
  $('#currentTemp').html(currentTemp);
  $('#currentWeather').html(currentWeather);
  var iconSrc = 'http://openweathermap.org/img/w/' + icon + '.png';
  console.log(iconSrc);
  $('#currentWeather').prepend('<img src="' + iconSrc + '"/>');
  $('#tempHighLow').html(tempHigh + '/' + tempLow);
}
  $(function() {

    $.getJSON('http://ipinfo.io', function(d) {
      loc = d.loc.split(",");
      console.log("the assigned data is:", loc);
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + loc[0] + "&lon=" + loc[1] + "&APPID=" + API_KEY + "&units=metric", function(APIData) {
        wd = APIData;

        render(APIData, far);

        $('#unitChange').click(function() {
          $('span').toggleClass('off');
          far = !far;
          render(APIData, far);
        });

      });
      //console.log("http://api.openweathermap.org/data/2.5/weather?lat=" + loc[0] + "&lon=" + loc[1] + "&APPID=" + API_KEY + "&units=metric");
    });
  });