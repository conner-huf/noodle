import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

import './LeafletMap.css';

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    useEffect(() => {
      map.invalidateSize();
    }, []);
    return null;
}

const LeafletMap = () => {
  const position = [51.505, -0.09]; // Default position [lat, lng]

  return (
    <div className='map-container'>
        <MapContainer center={position} zoom={13} maxBounds={[[-90, -180],[90, 180]]}>
        <ChangeView center={position} zoom={13} />
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            noWrap={true}
        />
        <Marker position={position}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  );
}

export default LeafletMap;