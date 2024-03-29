import React, { useState, useEffect } from 'react'
import './ArtistWidget.css'

import { ThreeDots } from 'react-loader-spinner';
import { FaSpotify } from "react-icons/fa6";

function ArtistWidget({ artist }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://noodle-backend-221e49e8efe6.herokuapp.com';

  useEffect(() => {

    fetch(`${BASE_URL}/spotify_data/${encodeURIComponent(artist.name)}`)
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
  }, [artist]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return (
    <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#3d3d3d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
    )
  }

  return (
    <div className='widget-container'>
        <div className='inner-widget'>
          <div className='artist-widget-container'>
            <div className='artist-widget-left-portion'>
              <img className='artist-picture' src={data.images[1]?.url} alt={data.name} />
            </div>
            <div className='artist-widget-right-portion'>
              <h1 className='artist-name'>{data.name}</h1>
              <a href={data.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <button className='artist-spotify-link'>
                  <FaSpotify className='spotify-logo'/>
                </button>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ArtistWidget