import React, { useState } from 'react'
import { Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import { ArtistCard } from '../ArtistCard/ArtistCard'; 

import './MapMarker.css';

const MapMarker = ({ marker, setSelectedConcert }) => {
  const [open, setOpen] = useState(false);

  const customIcon = new Icon({
    iconUrl: require('../../Assets/marker.png'),
    iconSize: [35, 35] // in pixels
  })

  const handleClick = () => {
    setOpen(true);
    setSelectedConcert();
  }

  return (
    <Marker position={marker.geoCode} icon={customIcon} eventHandlers={{ click: handleClick }}>
      {open && (
        <Popup>
          <ArtistCard artistName={marker.name} />
        </Popup>
      )}
    </Marker>
  )
}

export default MapMarker;