document.addEventListener("DOMContentLoaded", function() {
  var city = document.getElementById("cityInput");

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

document.querySelector(".weather").style.background = `url(https://source.unsplash.com/1920x1280/?${!city ? defaultCity : city})`
    dateToday = new Date();

    date = dateToday.getDate();
    console.log(date);
    let year = dateToday.getFullYear()
    month = dateToday.getMonth();
    
console.log(`https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-1}`)
    axios
    .get(
      `https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-1}`
  )
  .then((response) => {
    console.log(response.data);
    document.getElementById("tuesdayw").innerHTML = `${
      response.data.forecast.forecastday[0].day.avgtemp_c
    }${"<sup>0</sup>"}C`;
  });

axios
  .get(
    `https://api.weatherapi.com/v1/history.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&dt=${year}-0${month + 1}-${date-2}`
  )
  .then((response) => {
    console.log(response.data);
    document.getElementById("mondayw").innerHTML = `${
      response.data.forecast.forecastday[0].day.avgtemp_c
    }${"<sup>0</sup>"}C`;
  });
axios
  .get(
    `https://api.weatherapi.com/v1/current.json?key=bcc436f472c54a5397f120300231307&q=${!city ? defaultCity : city}&aqi=no`
  )
  .then((response) => {
    console.log(response.data);
    document.getElementById("todayw").innerHTML = `${
      response.data.current.temp_c
    }${"<sup>0</sup>"}C`;
    
      document.getElementById("cityName").innerText = `${!city ? defaultCity : city}: ${response.data.location.region}, ${response.data.location.country}`

      document.getElementById("icon1").src = response.data.current.condition.icon;
    document.getElementById("icon2").src = response.data.current.condition.icon;
    document.getElementById("icon3").src = response.data.current.condition.icon;

    document.getElementById("cloud").innerText =
      response.data.current.condition.text;
  })
  .catch((error) => {
    console.log(error);
  });

dateToday = new Date();

dayToday = dateToday.getDay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let leo = days[dayToday]

let juzi = days[dayToday - 2];

let yesterday = days[dayToday - 1];

document.getElementById("yesterday").innerHTML = yesterday;
document.getElementById("juzi").innerHTML = juzi;
document.getElementById("leo").innerHTML =` Today: ${leo}`;

}
