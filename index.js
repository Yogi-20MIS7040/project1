const apikey = "8b8ea85028de883c68a1ec389f7a0e1d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const units = "&units=Metric";

const searchbox = document.querySelector(".search input");
const searcbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function Weather(city) {
  const response = await fetch(apiurl + city + units + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
  document.querySelector(".feels-like").innerHTML = `Feels like: ${Math.round(
    data.main.feels_like
  )}°C`;
  document.querySelector(
    ".description"
).innerHTML = `Weather: ${data.weather[0].description}`;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
}

searcbtn.addEventListener("click", () => {
  Weather(searchbox.value);
});
