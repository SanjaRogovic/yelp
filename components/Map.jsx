import React, {useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map = ({restaurant}) => {

  // console.log(restaurant.location[0])

  useEffect(() => {
    console.log(restaurant.location);
  }, [restaurant])

  
  return (
  
    <div className="mapContainer">
    <MapContainer
          center={[restaurant.location[1], restaurant.location[0]]}
          zoom={13}
          scrollWheelZoom={false}
          style={{height: "500px"}}
        >
          <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
          <Marker position={[restaurant.location[1], restaurant.location[0]]}>
            <Popup>{restaurant.name} </Popup>
          </Marker>
        </MapContainer>
     </div>
  )
}


export default Map