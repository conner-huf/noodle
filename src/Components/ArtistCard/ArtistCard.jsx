import React from 'react'
import './ArtistCard.css'

import { FaSpotify } from "react-icons/fa6";

export const ArtistCard = ({ data }) => {
  return (
  <div className='artist-card-container'>
    <img className='searched-artist-picture' src={data.images[1].url} alt={data.name} />
    <h1 className='searched-artist-name'>{data.name}</h1>
    <a href={data.external_urls.spotify} target="_blank" rel="noopener noreferrer">
      <button className='searched-artist-spotify-link'>
        <FaSpotify className='spotify-logo'/>
      </button>
    </a>
  </div>
  )
}
