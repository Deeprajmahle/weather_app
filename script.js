const API_KEY="61829194ebe681ecba27121dd0fe7eb6";
const temp=document.getElementById("span1");
const City=document.getElementById("city1");
const wind_speed=document.getElementById("speed");
const humidity=document.getElementById("humidity1");

const form=document.getElementById("search-form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const searchedCity=document.getElementById("search-bar").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}&units=metric`;
    fetch(url)
.then((res)=>res.json())
.then(loadweather);

});




function loadweather(data){
    console.log("refreshing weather..");
    console.log(data);
    showweather(data);
}
function showweather(data){
    temp.textContent=data.main.temp;
    City.textContent=data.name;
    wind_speed.textContent=data.wind.speed;
    humidity.textContent=data.main.humidity;

    

}