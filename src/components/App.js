import React from 'react';

import WeatherTable from './WeatherTable'
import './App.css'

function App() {
  const data = [
    { city: 'New York', low: '28', high: '42', forecast: 'cloudy' },
    { city: 'Dallas', low: '38', high: '50', forecast: 'sunny' },
    { city: 'Chicago', low: '26', high: '34', forecast: 'rain' },
    { city: 'Seattle', low: '39', high: '44', forecast: 'cloudy' },
    { city: 'Honolulu', low: '75', high: '82', forecast: 'partly sunny' },
  ];

  return (
    <div className="App">
      <header>
        <h1>React Table Demo</h1>
      </header>
      <main className="main">
        <WeatherTable data={data} />               
      </main>
    </div>
  );
}

export default App;
