'use strict'

const { response } = require("express");
const Models = require('../models');




let myZipCode = 23221;
const apiKey = process.env.WEATHER_API_KEY


const getForecast = async (req, res) => {
    try {
        const response = await fetch(` http://api.weatherbit.io/v2.0/current?key=${apiKey}&units=I&postal_code=${myZipCode}&country=US `)
        .then(response => response.json())
        .then(weather => {

           const weatherData = weather.data[0];  
           console.log(weatherData)
           res.json(weatherData)
           return weatherData                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

        })
    } catch (error) {
        console.error('Error fetching data from weather API:', error);
    }
}
const weatherData = getForecast();


const createForecast = (weatherData, res) => {
    try {
        const data = { temp_f: weatherData.temp,
            wind_mph: weatherData.wind_spd,
            air_quality: 'updating',
            uv: weatherData.uv}

    Models.Forecast.create(data)
    
        res.send({ result: 200, data: {
            temp_f: weatherData.temp,
            wind_mph: weatherData.wind_spd,
            air_quality: 'updating',
            uv: weatherData.uv
        }
    })}catch(err) { 
        console.log(err);
        res.send({ result: 500, error: err.message});
        }
}


module.exports = { getForecast, createForecast }
