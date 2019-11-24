import React from 'react';

import WeatherTable from 'components/WeatherTable'
import 'components/App.css'

function App() {

  return (
    <div className="App">
      <header>
        <h1>React Table Demo</h1>
      </header>
      <main className="main">
        <WeatherTable />               
      </main>
    </div>
  );
}

export default App;
