const apiKey = "c74d9a7474a9136d7be274832fc35fc5";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const weatherIcon =document.querySelector(".weather-icon");


 async function checkWeather(city){
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 
if(response.status == 404){
  document.querySelector(".error").style.display = "block";
  document.querySelector(".weather").style.display = "none";
}else{
   var data  = await response.json();
   
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".Wind").innerHTML = data.Wind.speed + " Km/h ";
  
   if(data.Weather[0].main == "clouds"){
    weatherIcon.src = "image/clouds.png";
   }
   else if(data.weather[0].main == "clear"){
     weatherIcon.src = "image/clear.png";
   }
   else if(data.weather[0].main == "rain"){
     weatherIcon.src = "image/rain.png";
   }
   else if(data.weather[0].main == "Drizzle"){
     weatherIcon.src = "image/drizzle.png";
   }
   else if(data.weather[0].main == "Mist"){
     weatherIcon.src = "image/mist.png";
   }

   document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";
}

}

 searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
 });

 
