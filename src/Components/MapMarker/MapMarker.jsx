import React, { useRef, useEffect } from 'react'
import { Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import { ArtistCard } from '../ArtistCard/ArtistCard'; 

import './MapMarker.css';

const MapMarker = ({ marker, setSelectedConcert, selectedConcert }) => {
  const markerRef = useRef(null);

  const customIcon = new Icon({
    iconUrl: require('../../Assets/marker.png'),
    iconSize: [35, 35] // in pixels
  })

  const handleClick = (e) => {
    setSelectedConcert(marker);
  }

  useEffect(() => {
    if (selectedConcert && marker.name === selectedConcert.name) {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }
  }, [selectedConcert, marker.name])

  return (
    <Marker ref={markerRef} position={marker.geoCode} icon={customIcon} eventHandlers={{ click: handleClick }}>
        <Popup open={selectedConcert && marker.name === selectedConcert.name}>
          <ArtistCard artistName={selectedConcert ? selectedConcert.name : ''} />
        </Popup>
    </Marker>
  )
}

export default MapMarker;