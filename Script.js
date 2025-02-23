const apikey ="8ed5c154e704ba37cd8a07af660e11f8";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon =document.querySelector(".wheather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`); 
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
        if(data.weather[0].main == "Clouds"){
            wheatherIcon.src = "./images/clouds.png"
    
        }else if(data.weather[0].main == "Clear"){
       wheatherIcon.src = "./images/clear.png"
            
        }else if(data.weather[0].main == "Rain"){
            wheatherIcon.src = "./images/rain.png"
                 
             }else if(data.weather[0].main == "Drizzle"){
                wheatherIcon.src = "./images/drizzle.png"
                     
        }else if(data.weather[0].main == "Mist"){
            wheatherIcon.src = "./images/mist.png"
                 
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
   
}
    searchBtn.addEventListener("click", () =>{
        checkWeather(searchBox.value);
    } )
   