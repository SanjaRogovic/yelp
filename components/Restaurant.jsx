import React from 'react'
import Map from './Map'

const Restaurant = ({restaurant}) => {
//   const [location, setLocation] = useState(null);
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  
  setLat = restaurant.location[0];
  setLng = restaurant.location[1];

  return (
    <div>
      <p>Test</p>
      {location !== null ? (
        <Map lat={lat} lng={lng} />
      ) : null}
    </div>
  );
}

export default Restaurant