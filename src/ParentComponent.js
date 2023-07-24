import React, { useState } from 'react';
import ApiIntakeForm from './ApiIntakeForm';
import TemperatureComponent from './TemperatureComponent';

const ParentComponent = () => {
  const [apiKey, setApiKey] = useState('');
  const [location, setLocation] = useState('');

  const handleFormSubmit = (apiKey, location) => {
    setApiKey(apiKey);
    setLocation(location);
  };

  return (
    <div className="container mx-auto p-4">
      <ApiIntakeForm onFormSubmit={handleFormSubmit} />
      {apiKey && location && (
        <TemperatureComponent apiKey={apiKey} location={location} />
      )}
    </div>
  );
};

export default ParentComponent;






