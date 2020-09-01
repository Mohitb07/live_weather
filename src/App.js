import React, {useState, useEffect } from 'react';
import index from './index.css'


const api = {
    key : 'b267e1938cf3553846b90e9d9090a5ed',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const App = () => {


    const [query, setQuery] = useState('');
    const [weather, setWeather]= useState({});
    const [dailyDataMax, setDailyDataMax] = useState([]);
    const [dailyDataMin, setDailyDataMin] = useState([]);
    
    

    const search = evt => {
        if (evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setQuery('');
                console.log(data)
                
                if (data.cod!=404){               
                    fetch(`${api.base}onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&
                    exclude=daily,&appid=${api.key}`)          
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    setDailyDataMax(data.daily[1].temp.max - 273.15);
                    setDailyDataMin(data.daily[1].temp.min - 273.15);
                    console.log(data.daily[1].temp.max - 273.15)
                })
            }
            })
        }
    }


    const dateBuilder = (d) => {
        let months = ["January", "February","March", "April","May", "June","July", "August","September", "October","November", "December"]
        let days = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday", "Sunday"]
    
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className={(typeof weather.main!="undefined") ? 
        ((weather.weather[0].main === 'Haze') ? 'haze':(weather.weather[0].main==='Clouds') ? 'clouds':(weather.weather[0].main ==='Rain')? 'rain':(weather.weather[0].main === 'Thunderstorm')?'thunderstorm':(weather.weather[0].main === 'Clear')?'clear':(weather.weather[0].main === 'Mist')?'mist':(weather.weather[0].main === 'Smoke')? 'smoke':'')
        
        
        :'app'}>

            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main!="undefined") ?(
                <div>
                <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">
                        {dateBuilder(new Date())}
                    </div>
                </div>
                <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}&#176;C</div>
                    <div className="weather">
                        <div id="feels-like"> Feels like &nbsp;
                        {Math.round(weather.main.feels_like)}&#176;
                        </div>
                        {weather.weather[0].main}
                        <h6>Tomorrow</h6>
                <p>Max {Math.floor(dailyDataMax)}&#176;  / Min {Math.floor(dailyDataMin)}&#176;</p>                     
                    </div>
                </div>
                </div>
                ):('') }
            </main>
        </div>
    )
}

export default App;