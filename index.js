function searchWeather() {
    const cityName = document.getElementById("cityInput").value;
    const apiKey = '';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // AJAX isteği gönderme
    const xhr = new XMLHttpRequest();
    xhr.open("GET", weatherUrl, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const weatherData = JSON.parse(xhr.responseText);
            
            updateWeatherData(weatherData);
        } else {
            console.error("Hava durumu verileri alınamadı.");
        }
    };
    xhr.send();
}

function updateWeatherData(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;


    
    document.querySelector(".weather-icon").src = getImagePath(description)
    document.querySelector("h1").textContent = temperature + "°C";
    document.querySelector("h2").textContent = city;
    document.querySelector("p").textContent = description;
}

function getImagePath(description) {
    let imagePath = "";
    switch (description) {
        case "clear sky":
            imagePath = "images/clear.png";
            break;
        case "clear sky":
            imagePath = "images/clear.png";
            break;
        case "clear sky":
            imagePath = "images/clear.png";
            break;
        case "clear sky":
            imagePath = "images/clear.png";
            break;
        case "clear sky":
            imagePath = "images/clear.png";
            break;
        case "clear sky":
            imagePath = "images/clear.png";
            break;
    }
    return imagePath;
}

