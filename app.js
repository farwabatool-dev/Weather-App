const apiKey = "a3277063705fd2c508faef3f9e23f480";
const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("city");
const weather = document.getElementById("weather");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

 weather.innerHTML = "<h3>⏳ Loading weather...</h3>";


try {

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    if (data.cod === "404") {
    weather.innerHTML = "<h2>❌ City Not Found</h2>";
    return;
}

    console.log(data);
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();

const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

   weather.innerHTML = `
    <h2>${data.name}</h2>

    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

    <h3>${data.main.temp}°C</h3>

    <p><b>Condition:</b> ${data.weather[0].main}</p>

    <p><b>Feels Like:</b> ${data.main.feels_like}°C</p>

    <p><b>Humidity:</b> ${data.main.humidity}%</p>

    <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>

    <p><b>Visibility:</b> ${data.visibility / 1000} km</p>
    <p><b>Sunrise:</b> ${sunrise}</p>

<p><b>Sunset:</b> ${sunset}</p>
`;
    
    }

 catch (error) {
    console.log(error);
    

   weather.innerHTML = `
    <h2>⚠️ Oops!</h2>
    <p>Unable to fetch weather data.</p>
    <p>Please check your internet connection and try again.</p>
`;

}
});