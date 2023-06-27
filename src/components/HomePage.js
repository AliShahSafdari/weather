import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../redux/weather/weathersReducer';
import chooseImage from './ImageFunction';

const ShowAll = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weathers.weatherData);
  const [selectedOption, setSelectedOption] = useState('All'); // State to store the selected option value

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredData = weatherData.filter((city) => {
    if (selectedOption === 'All') {
      return true; // Show all cities when 'All' is selected
    }
    else if (selectedOption === 'hot') {
        return Math.floor(city.main.temp - 273.15) > 21; // Filter based on temperature greater than 21
      } 
    else if (selectedOption === 'Cold') {
        return Math.floor(city.main.temp - 273.15) < 10; // Filter based on temperature less than 10
      } 
    else if (selectedOption === 'Temperate') {
        return Math.floor(city.main.temp - 273.15) >= 10 && Math.floor(city.main.temp - 273.15) <= 21; // Filter based on temperature between 10 and 21
      }
  });


  return (
    <>
      <h1>Home page</h1>
      <select  onChange={(e) =>(setSelectedOption(e.target.value))} value={selectedOption}>
            <option value="All" >All</option>
            <option value="hot">Hot</option>
            <option value="Temperate" >Temperate</option>
            <option value="Cold"  >Cold</option>
        </select>

      {filteredData.map((city) => <div key={city.id}>{city.name}
      <p>{city.visibility}</p>
      <p>{city.main.humidity}</p>
      <p>{(city.main.temp-273.15).toFixed(2)} °C</p>
      <p>{city.weather[0].icon}</p>
      <img src={chooseImage(Math.floor(city.main.temp-273.15))} alt="weatherIcon" />
      <Link to={`/details/${city.id}`}>more...</Link>
      </div>)}
      
    </>
  );
};
export default ShowAll;
