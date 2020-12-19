import React from 'react';
import propTypes from 'prop-types';

const Weather = ({ name, clouds, main, weather, wind, sys }) => {
  const temp = main && Math.round(main.temp - 273.15);
  const sunrise = sys && new Date(sys.sunrise).toLocaleTimeString();
  const sunset = sys && new Date(sys.sunset).toLocaleTimeString();

  return (
    name &&
    <ul className="weather">
      <li>Местоположение: {name}, {sys.country}</li>
      <li>Температура: {temp} C</li>
      <li>Облачность: {clouds.all}</li>
      <li>Погода: {weather[0].main}</li>
      <li>Давление: {main.pressure}</li>
      <li>Скорость ветра: {wind.speed}</li>
      <li>Время восхода: {sunrise}</li>
      <li>Время заката: {sunset}</li>
    </ul>
  );
};

Weather.propTypes = {
  name: propTypes.string,
  clouds: propTypes.object,
  main: propTypes.object,
  weather: propTypes.array,
  wind: propTypes.object,
  sys: propTypes.object
};

export default Weather;