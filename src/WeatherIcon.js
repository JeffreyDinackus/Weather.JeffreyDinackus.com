import React from 'react';
import SunIcon from './images/wi-day-sunny.svg'; 
import RainIcon from './images/wi-rain.svg';
import CloudIcon from './images/wi-cloudy.svg';
import ThunderstormIcon from './images/wi-thunderstorm.svg';
import SnowIcon from './images/wi-snow-wind.svg';
import Stars from './images/wi-stars.svg';
import HazeIcon from './images/wi-dust.svg';

const WeatherIcon = ({ description }) => {
  const getWeatherIcon = (description) => {
    if (description && typeof description === 'string') {
      const lowercaseDescription = description.toLowerCase();
      // Match the weather conditions and return the corresponding SVG path
      switch (lowercaseDescription) {
        case 'clear sky':

          return SunIcon; // Use the imported SunIcon SVG path
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
        case 'overcast clouds':
            return CloudIcon; // Use the imported CloudIcon SVG path


        case 'shower rain':
        case 'rain':
        case 'mist':
        case 'light rain':
        case 'moderate rain':
        case 'heavy intensity rain':            
        return RainIcon; // Use the imported RainIcon SVG path
        // Add other cases for different weather conditions here
        case 'thunderstorm':
        return ThunderstormIcon;
        case 'snow':
        return SnowIcon;
        case 'haze':
        return HazeIcon;
        default:
          return Stars; // Return the default icon if the weather condition is not matched
      }
    } else {
      // Return the default icon if the description is missing or not a valid string
      return SunIcon; // Replace with the default icon SVG path
    }
  };

  const iconPath = getWeatherIcon(description);

  return <img src={iconPath} alt="Weather Icon" className="w-12 h-12" />;

  
};

export default WeatherIcon;