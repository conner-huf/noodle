import React, { useEffect, useState } from 'react';
import './Main.css';

import { ArtistCard } from '../ArtistCard/ArtistCard';
import { ConcertsCard } from '../ConcertsCard/ConcertsCard';

function Main({ artistName }) {
  const [spotifyData, setSpotifyData] = useState(null);
  const [concertData, setConcertData] = useState([]);

  useEffect(() => {
    setConcertData([]);

    if (artistName) {
      fetch(`http://localhost:5000/spotify_data/${encodeURIComponent(artistName)}`)
        .then(response => response.json())
        .then(data => setSpotifyData(data));

      fetch(`http://localhost:5000/concert_data/${encodeURIComponent(artistName)}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setConcertData(data);
        });
    }
  }, [artistName]);

  return (
    <div className='main-content-container'>
      {spotifyData && <ArtistCard data={spotifyData} />}
      {concertData && <ConcertsCard data={concertData} />}
    </div>
  );
}

export default Main;