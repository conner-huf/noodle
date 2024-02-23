import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  const [artistName, setArtistName] = useState(null);
  const [city, setCity] = useState(null);

  return (
    <div>
      <Header setArtistName={setArtistName} setCity={setCity} />
      <Main artistName={artistName} city={city} />
    </div>
  );
}

export default App;
