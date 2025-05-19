// let city = document.querySelector("#btn").addEventListener("click",function(){
//     const place = document.querySelector("input").value;
//     console.log(place);
//     return place;
// });
// console.log(city);


const apiKey = "88867ca8fe80fd10847baca443cc43c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

 async function cheakWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";    
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";    
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";   

    
    // console.log(data.weather[0].main);
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rainy-day.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}
searchBtn.addEventListener("click",()=>{
    cheakWeather(searchBox.value);
    // searchBox.value = " ";
})

document.addEventListener("keypress",(e)=>{
    if(e.key =="Enter" ){
        cheakWeather(searchBox.value);
    }
    // console.log(e.key);
})