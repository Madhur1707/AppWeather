import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assests/search.png';
// import rain_icon from '../Assests/rain.png';
import cloud_icon from '../Assests/cloud.png';
// import clear_icon from '../Assests/clear.png';
// import drizzle_icon from '../Assests/drizzle.png';
import humid_icon from '../Assests/humid.png';
// import snow_icon from '../Assests/sow.png';
import wind_icon from '../Assests/wind.png';

const WeatherApp = () => {

let api_key="d3d2bcb6f18ae253574e3c64a3df63ba";

const search = async () => {
const element = document.getElementsByClassName("cityInput")
if(element[0].value==="")
{
  return 0;
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`

let response = await fetch(url);

let data = await response.json();
const humidity = document.getElementsByClassName("humidity-percentage")
const wind = document.getElementsByClassName("wind-rate")
const temprature = document.getElementsByClassName("weather-temp")
const location = document.getElementsByClassName("weather-location")

humidity[0].innerHTML = data.main.humidity;
wind[0].innerHTML =data.wind.speed;
temprature[0].innerHTML = data.main.temp;
location[0].innerHTML = data.name;

}


  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='search' />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°C </div>
      <div className="weather-location">Gwalior</div>
      <div className="data-container">
        <div className="element">
          <img src={humid_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp