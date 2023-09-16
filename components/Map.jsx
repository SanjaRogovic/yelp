import React, {useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map = ({restaurant}) => {

  useEffect(()=> {
    console.log(restaurant.name)
  }, [])

  return (
    <div className="mapContainer">
  <MapContainer
        center={restaurant}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: "500px"}}
      >
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
        <Marker position={restaurant}>
          <Popup> You are here! </Popup>
        </Marker>
      </MapContainer>
   </div>
  )
}


export default Map