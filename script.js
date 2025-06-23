
const cityInput = document.getElementById("city");
const getWeatherBtn = document.getElementById("getWeather");
const locationDisplay = document.getElementById("location");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const weatherDisplay = document.getElementById("weather");
const weatherIcon = document.getElementById("weatherIcon");

const API_KEY = "47bc7c6d4eebe3c034fc583b632f461e";

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Kota tidak ditemukan!");
        }

        const data = await response.json();

        locationDisplay.textContent = `${data.name}, ${data.sys.country}`;
        temperatureDisplay.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionDisplay.textContent = `${data.weather[0].description}`;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherDisplay.classList.remove("hidden");
    } catch (error) {
        alert("Error: " + error.message);
        weatherDisplay.classList.add("hidden"); 
    }
}

getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert("Harap masukkan nama kota!");
    }
});