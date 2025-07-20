import React from 'react'
import Card from './card'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png',
});

const Maps = ({ latitude, longitude }) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden rounded " style={{ height: '400px', width: '600px', border: 'none' }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ borderRadius: '10px', height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          // attribution='&copy; <a href="https://www.openstreetmap.org/  target="_blank" ">OpenStreetMap</a> contributors &copy; <a  href="https://carto.com/"  target="_blank">CARTO</a>'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            Latitude: {latitude} <br />
            Longitude: {longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Maps
