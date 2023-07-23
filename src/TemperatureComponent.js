import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TemperatureComponent = ({ apiKey, location }) => {
  const [temperature, setTemperature] = useState(null);

  const fetchTemperature = async () => {
    if (apiKey && location) {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );

        const { main } = response.data;
        setTemperature(main.temp);
      } catch (error) {
        console.error('Error fetching temperature:', error);
        setTemperature(null);
      }
    }
  };

  useEffect(() => {
    fetchTemperature();
  }, [apiKey, location]);

  return (
    <div className="container mx-3">
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchTemperature}
      >
        Get Temperature
      </button>

      {temperature !== null ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Temperature in {location}:</h2>
          <p className="text-2xl">{temperature} °C</p>
        </div>
      ) : (
        <p className="text-gray-600">Click "Get Temperature" to fetch the current temperature for {location}.</p>
      )}
    </div>
  );
};

export default TemperatureComponent;