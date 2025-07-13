const apikey = "fceba77520ea78f3b462fa6d70fe8f5e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function getapi(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) 
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else 
    {
        const data = await response.json();
        console.log(data);
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if (data.weather[0].main == "Clouds") {
            weathericon.src = "D:/webdev/weather-app-img/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "D:/webdev/weather-app-img/rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "D:/webdev/weather-app-img/mist.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "D:/webdev/weather-app-img/drizzle.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "D:/webdev/weather-app-img/clear.png";
        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "D:/webdev/weather-app-img/snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchbtn.addEventListener("click", () => 
{
    getapi(searchbox.value);
});