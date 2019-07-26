import React, {useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => {

    const [newWeather, setNewWeather] = useState({})
    const [newPicture, setNewPicture] = useState({})
    var url = 'http://api.apixu.com/v1/current.json?key=79a8683344144a69820183644192507&q='

    useEffect(() => {
        console.log('Wheater effect')
        axios
            .get(url+country.capital)
            .then(response => {
                console.log(response.data)
                setNewWeather(response.data.current)
                setNewPicture(response.data.current.condition)
            })
    }, [])
    console.log('render', newWeather.temp_c)


    
    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>temperature {newWeather.temp_c}</p>
            <img src={newPicture.icon} alt="test" />
            <p>wind {newWeather.wind_kph} kph direction {newWeather.wind_dir}</p>
        </div>
    )
}



export default Weather