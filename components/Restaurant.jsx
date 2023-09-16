import React, {useState, useEffect} from 'react'
import Map from './Map'
import {useParams} from "react-router-dom"
import axios from 'axios'
import * as ReactBootstrap from "react-bootstrap";
import Comments from './Comments';


const Restaurant = () => {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [restaurant, setRestaurant] = useState({})
  const [loading, setLoading] = useState(false)
  const {index} = useParams()


  const getRestaurant = async() => {
    try {
        setLoading(true)
      let config = {
        url: `https://mngotest.fly.dev/restaurants/${index}`,
        method: "get",
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true'
        }
    }
      const response = await axios(config);
      console.log(response.data)
      setRestaurant(response.data);
      
      console.log(restaurant);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
    finally {
        setLoading(false)
      }
}


  useEffect(() => {
    if (Object.keys(restaurant).length > 0) {
        setLat(restaurant.location[0])
        setLng(restaurant.location[1])
    }
    getRestaurant()
  }, [])
  

  return (
    <div> 
      {/* {JSON.stringify(restaurant)} */}
      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className='paragraphContent'>Content loading ...</p>
        </div>
      ) : null}

      <h1>{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} />
      {/* <p>{restaurant.rating}</p> */} 
      
      {/* {location !== null ? ( */}
        <Map restaurant={restaurant} />
      {/* ) : null} */}
    </div>
  );
}

export default Restaurant