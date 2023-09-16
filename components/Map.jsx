import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = ({lat, lng}) => {
  return (
    <div className="mapContainer">
  <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: "500px"}}
      >
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
        <Marker position={[lat, lng]}>
          <Popup> You are here! </Popup>
        </Marker>
      </MapContainer>
   </div>
  )
}

export default Map