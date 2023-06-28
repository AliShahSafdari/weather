import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
  const { cityId } = useParams();
  const weatherData = useSelector((state) => state.weathers.weatherData);
  const city = weatherData.find((city) => city.id === parseInt(cityId, 10));

  return (
    <>
      <h1>City Details</h1>
      {city && (
        <div>
          <h2>{city.name}</h2>
          <p>
            Visibility:
            {city.visibility}
          </p>
          {/* Display more details about the city */}
        </div>
      )}
    </>
  );
};

export default CityDetails;
