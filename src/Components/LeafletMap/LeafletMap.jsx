import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from '../MapMarker/MapMarker';
import MarkerClusterGroup from 'react-leaflet-cluster';

import './LeafletMap.css'

const LeafletMap = ({ concertData, setSelectedConcert }) => {

  return (
    <MapContainer center={[34.052, -118.243]} zoom={9}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
      {concertData.flatMap((concert, index) => {
        if (concert.name === '') {
          return null;
        }
        const marker = {
          geoCode: [concert.location.latitude, concert.location.longitude],
          name: concert.name,
          url: concert.url
        };
        return <MapMarker key={index} marker={marker} setSelectedConcert={() => setSelectedConcert(concert)} />;
      })}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default LeafletMap