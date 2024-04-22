const apiKey = "1529f3db50618fcc8137366c7b2574d8";
const weatherService = new WeatherService(apiKey);
const weatherController = new WeatherController(weatherService);
weatherController.getWeatherByCity("São Paulo");

function getWeather () {
    const cityInput = document.getElementById('cityInput').value;
    weatherController.getWeatherByCity(cityInput)
}