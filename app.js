document.addEventListener("DOMContentLoaded", function() {
  var city = document.getElementById("cityInput");

  city.defaultValue = "Nairobi"
  city.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("clicker").click();
    }
  });
});

const defaultCity = "Nairobi"
window.onload = displayWeather(defaultCity)


function displayWeather (city){
     city = document.getElementById("cityInput").value

// document.querySelector(".weather").style.background = `url(https://source.unsplash.com/1920x1280/?${!city ? defaultCity : city})`
    dateToday = new Date();

    date = dateToday.getDate();
    // console.log(date);
    let year = dateToday.getFullYear()
    month = dateToday.getMonth();
    
// console.log(`https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-1}`)
    axios
    .get(
      `https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-2}`
  )
  .then((response) => {
    // console.log(response.data);
    document.getElementById("yesterday").innerText = formatDay(response.data.forecast.forecastday[0].date)
    document.getElementById("cloudTues").innerText = response.data.forecast.forecastday[0].day.condition.text

    document.getElementById("icon2").src = response.data.forecast.forecastday[0].day.condition.icon
    document.getElementById("tuesdayw").innerHTML = `${
      response.data.forecast.forecastday[0].day.avgtemp_c
    }${"<sup>0</sup>"}C`;
  });

axios
  .get(
    `https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-1}`
  )
  .then((response) => {
    // console.log(response.data);
    document.getElementById("juzi").innerText = formatDay(response.data.forecast.forecastday[0].date)
    document.getElementById("icon3").src = response.data.forecast.forecastday[0].day.condition.icon
document.getElementById("cloudJuz").innerText = response.data.forecast.forecastday[0].day.condition.text
    document.getElementById("mondayw").innerHTML = `${
      response.data.forecast.forecastday[0].day.avgtemp_c
    }${"<sup>0</sup>"}C`;
  });
axios
  .get(
    `https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-3}`
  )
  .then((response) => {
    // console.log(response.data);
    document.getElementById("wed").innerText = formatDay(response.data.forecast.forecastday[0].date)
    document.getElementById("icon4").src = response.data.forecast.forecastday[0].day.condition.icon
    document.getElementById("cloudWed").innerText = response.data.forecast.forecastday[0].day.condition.text

    document.getElementById("wednesdayw").innerHTML = `${
      response.data.forecast.forecastday[0].day.avgtemp_c
    }${"<sup>0</sup>"}C`;
  });
axios
  .get(
    `https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-4}`
  )
  .then((response) => {
    // console.log(response.data);
    document.getElementById("thr").innerText = formatDay(response.data.forecast.forecastday[0].date)

    document.getElementById("icon5").src = response.data.forecast.forecastday[0].day.condition.icon
    document.getElementById("cloudThur").innerText = response.data.forecast.forecastday[0].day.condition.text

    document.getElementById("thursdayw").innerHTML = `${
      response.data.forecast.forecastday[0].day.avgtemp_c
    }${"<sup>0</sup>"}C`;
  });
axios
  .get(
    `https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-5}`
  )
  .then((response) => {
    // console.log(response.data);
    document.getElementById("fri").innerText = formatDay(response.data.forecast.forecastday[0].date)

    document.getElementById("icon6").src = response.data.forecast.forecastday[0].day.condition.icon
    document.getElementById("cloudFri").innerText = response.data.forecast.forecastday[0].day.condition.text

    document.getElementById("fridayw").innerHTML = `${
      response.data.forecast.forecastday[0].day.avgtemp_c
    }${"<sup>0</sup>"}C`;
  });
axios
  .get(
    `https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-6}`
  )
  .then((response) => {
    // console.log(response.data);
    document.getElementById("sat").innerText = formatDay(response.data.forecast.forecastday[0].date)

    document.getElementById("icon7").src = response.data.forecast.forecastday[0].day.condition.icon
    document.getElementById("cloudSat").innerText = response.data.forecast.forecastday[0].day.condition.text

    document.getElementById("saturdayw").innerHTML = `${
      response.data.forecast.forecastday[0].day.avgtemp_c
    }${"<sup>0</sup>"}C`;
  });
axios
  .get(
    `https://api.weatherapi.com/v1/current.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&aqi=no`
  )
  .then((response) => {
    // console.log(response.data);
    document.getElementById("todayw").innerHTML = `${
      response.data.current.temp_c
    }${"<sup>0</sup>"}C`;
    document.getElementById("leo").innerText = formatDay(response.data.location.localtime.split(" ")[0])
      document.getElementById("cityName").innerText = `${!city ? defaultCity : city}: ${response.data.location.region}, ${response.data.location.country}`

      document.getElementById("icon1").src = response.data.current.condition.icon;

    document.getElementById("cloud").innerText =
      response.data.current.condition.text;
  })
  .catch((error) => {
    console.log(error);
  });
}


function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}