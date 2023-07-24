import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';

const TemperatureComponent = ({ apiKey, location }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  const fetchCurrentWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      setCurrentWeather(response.data);
    } catch (error) {
      console.error('Error fetching current weather:', error);
    }
  };

  const fetchHourlyForecast = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric&cnt=8`
      );
      setHourlyForecast(response.data.list);
    } catch (error) {
      console.error('Error fetching hourly forecast:', error);
    }
  };

  const fetchDailyForecast = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&appid=${apiKey}&units=metric&cnt=5`
      );
      setDailyForecast(response.data.list);
    } catch (error) {
      console.error('Error fetching daily forecast:', error);
    }
  };

  useEffect(() => {
    if (apiKey && location) {
      fetchCurrentWeather();
      fetchHourlyForecast();
      fetchDailyForecast();
    }
  }, [apiKey, location]);

  return (
    <div className="container mx-auto p-4 max-w-md bg-gray-100 rounded-md shadow-md">
      {currentWeather && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Current Weather in {location}:</h2>
          <div className="flex items-center mb-4 p-4">
            <WeatherIcon description={currentWeather.weather[0].description} />
            <div className="ml-4">
              <p className="text-2xl">{currentWeather.main.temp} °C</p>
              <p className="text-xl">Description: {currentWeather.weather[0].description}</p>
              <p className="text-xl">Humidity: {currentWeather.main.humidity}%</p>
              <p className="text-xl">Wind Speed: {currentWeather.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}

      {hourlyForecast.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Hourly Forecast for 8 Hours:</h2>
          <div className="grid grid-cols-2 gap-4">
            {hourlyForecast.map((hourlyData, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
                <WeatherIcon description={hourlyData.weather[0].description} />
                <div className="ml-4">
                  <p>{new Date(hourlyData.dt * 1000).toLocaleTimeString()}</p>
                  <p className="text-lg">{hourlyData.main.temp} °C</p>
                  <p className="text-xl">Description: {hourlyData.weather[0].description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {dailyForecast.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Daily Forecast for 5 Days:</h2>
          <div className="grid grid-cols-2 gap-4">
            {dailyForecast.map((dailyData, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md m-8 flex items-center">
                <WeatherIcon description={dailyData.weather[0].description} />
                <div className="ml-4">
                  <p>{new Date(dailyData.dt * 1000).toLocaleDateString()}</p>
                  <p className="text-lg">{dailyData.temp.day} °C</p>
                  <p className="text-lg">Description: {dailyData.weather[0].description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemperatureComponent;