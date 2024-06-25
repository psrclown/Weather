const apikey = "9866d4f084ca7ac2ab4796f07c41f417";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let textbox = document.querySelector("input");
let btn = document.querySelector("button");
let img = document.querySelector(".weather-icon") 

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector("#cityname").innerText = data.name;
    document.querySelector("#temp").innerText = Math.round(data.main.temp)+ "°C";
    document.querySelector("#humidity").innerText = data.main.humidity + "%";
    document.querySelector("#wind").innerText = data.wind.speed + "Km/h";

if(data.weather[0].main == "clouds"){
        img.src = "img/clouds.png"
    } else if (data.weather[0].main == "Clear"){
        img.src = "img/clear.png"
    } else if (data.weather[0].main == "Drizzle"){
        img.src = "img/drizzle.png"
    } else if (data.weather[0].main == "Mist"){
        img.src = "img/mist.png"
    }else if (data.weather[0].main == "Snow"){
        img.src = "img/snow.png"
    }else if (data.weather[0].main == "Rain"){
        img.src = "img/rain.png"
    }
    console.log(img.src);
}
btn.addEventListener("click", () =>{
    checkweather(textbox.value);
    console.log(apiurl);
});



