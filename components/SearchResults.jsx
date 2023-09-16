import React from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom';
// import Restaurant from './Restaurant'

const SearchResults = ({restaurants}) => {  
    // console.log(restaurants);

    const { index} = useParams();

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
            <Link key={restaurant._id} to={`/components/Restaurant/${restaurant._id}`}>
            <li key={restaurant._id}>{restaurant.name}</li>
            {/* <img src={restaurant.image} alt={restaurant.name} /> 
            <p>{restaurant.rating}</p> */}
            </Link>
        
        ))}
      </ul>
    </div>
  );
}

export default SearchResults