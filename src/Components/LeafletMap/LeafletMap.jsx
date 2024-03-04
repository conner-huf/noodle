import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MapMarker from '../MapMarker/MapMarker';

import './LeafletMap.css'

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const LeafletMap = ({ concertData, setSelectedConcert, selectedConcert }) => {
  const center = selectedConcert ? [selectedConcert.location.latitude, selectedConcert.location.longitude] : [34.052, -118.243];
  const zoom = selectedConcert ? 14 : 10;

  return (
    <MapContainer center={[34.052, -118.243]} zoom={10}>
      <ChangeView center={center} zoom={zoom} />
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {concertData.flatMap((concert, index) => {
        if (concert.name === '') {
          return null;
        }
        const marker = {
          geoCode: [concert.location.latitude, concert.location.longitude],
          name: concert.name,
          url: concert.url
        };
        return <MapMarker key={index} marker={marker} setSelectedConcert={() => setSelectedConcert(concert)} selectedConcert={selectedConcert}/>;
      })}
    </MapContainer>
  )
}

export default LeafletMap