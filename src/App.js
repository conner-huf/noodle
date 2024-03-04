import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  const [artistName, setArtistName] = useState(null);
  const [city, setCity] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div>
      <Header setArtistName={setArtistName} setCity={setCity} setSidebarActive={setSidebarActive} sidebarActive={sidebarActive} />
      <Main artistName={artistName} city={city} sidebarActive={sidebarActive} />
    </div>
  );
}

export default App;
