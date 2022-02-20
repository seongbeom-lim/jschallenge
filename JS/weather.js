const API_KEY = "ce6f2033cce23067ff7af13a8f448eaa";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}7&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = data.main.temp - 273;
      city.innerText = data.name;
      weather.innerText = ` ${data.weather[0].main} / ${temp.toFixed(2)}℃ `;
    });
  console.log(lat, lon);
}
function onGeoError() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
