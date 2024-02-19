import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  const [artistName, setArtistName] = useState(null);

  return (
    <div>
      <Header setArtistName={setArtistName} />
      <Main artistName={artistName} />
    </div>
  );
}

export default App;
