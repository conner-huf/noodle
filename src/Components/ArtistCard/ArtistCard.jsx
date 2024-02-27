import React, { useEffect, useState } from 'react'
import './ArtistCard.css'

import { FaSpotify } from "react-icons/fa6";

export const ArtistCard = ({ artistName }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://noodle-backend-221e49e8efe6.herokuapp.com';

  useEffect(() => {

    console.log("ArtistCard: ", artistName)

    fetch(`${BASE_URL}/spotify_data/${encodeURIComponent(artistName)}`)
      .then(response => response.json())
      .then(data => {
        if (!data.name || !data.images || !data.external_urls.spotify ) {
          throw new Error('Missing data');
        }
        setData(data);
      })
      .catch(error => {
        console.log('Fetch error: ', error);
        setError(error.toString());
      });
  }, [artistName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return 'Loading...';
  }

  return (
  <div className='artist-card-container'>
    <div className='artist-card-top-portion'>
      <img className='searched-artist-picture' src={data.images[1]?.url} alt={data.name} />
    </div>
    <div className='artist-card-bottom-portion'>
      <h1 className='searched-artist-name'>{data.name}</h1>
      <a href={data.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        <button className='searched-artist-spotify-link'>
          <FaSpotify className='spotify-logo'/>
        </button>
      </a>
    </div>
    
  </div>
  )
}
