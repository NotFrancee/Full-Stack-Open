import React, {useState, useEffect} from "react";
import axios from "axios"

const CountryDetail = ({country}) => {
    const weatherApiKey = process.env.REACT_APP_API_KEY
    const [weatherData, setWeatherData] = useState("")

    const {name, capital, population, languages, flags} = country

    const languagesEl = Object.keys(languages).map(language => {
        return (
            <li key={language}>{languages[language]}</li>
        )
    })

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital[0]}&appid=${weatherApiKey}&units=metric`)
            .then(res => {
                console.log(res.data)
                setWeatherData(res.data)
            })
    }, [])

    const weatherDataEl = weatherData
        ? (
           <>
            <p><strong>Temperature:</strong> {weatherData.main.temp} Celsius</p>
            <p><strong>Wind:</strong> {weatherData.wind.speed} m/s</p>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
           </> 
        )
        : ( <p>Weather Data Loading...</p>)


    return (
        <>
            <h1>{name.common}</h1>
            <p>Capital: {capital.join(" ")}</p>
            <p>Population: {population}</p>

            <h2>Languages</h2>
            <ul>
                {languagesEl}
            </ul>

            <img width="200px" src={flags.svg} alt={`${name.common} flag`} />

            <h2>Weather in {capital[0]}</h2>
            {weatherDataEl}
        </>
    )
}

export default CountryDetail