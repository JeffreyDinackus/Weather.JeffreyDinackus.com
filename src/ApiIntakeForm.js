import React, { useState } from 'react';

const ApiIntakeForm = ({ onFormSubmit }) => {
  const [apiKey, setApiKey] = useState('');
  const [location, setLocation] = useState('');

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(apiKey, location);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="mr-2">
          Enter API Key for OpenWeatherMaps:
          <input
            type="text"
            value={apiKey}
            onChange={handleApiKeyChange}
            className="border p-2"
            required
          />
        </label>
        <label className="mr-2">
          Enter Location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className="border p-2"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApiIntakeForm;
