import { useEffect, useState } from 'react';
import axios from 'axios';

import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(null);

  const apiKey = '30a9e509f7d59d2d3c0e6add5629206d';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const getWeather = () => {
    location && axios.get(apiUrl)
    .then(({ data }) => setData(data))
    .catch(() => alert('Такого места не нашлось!'));
  };

  useEffect(getWeather, [apiUrl, location]);

  console.log(data);

  return (
    <div className="wrapper">
      <div className="app">
        <aside className="sidebar">
          <Info />
        </aside>
        <main className="main">
          <Form setLocation={setLocation} />
          {data && <Weather {...data} />}
        </main>
      </div>
    </div>
  );
};

export default App;