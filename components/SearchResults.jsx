import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';

const SearchResults = ({ restaurants }) => {
  // console.log(restaurants);

  const { index } = useParams();

  return (
    <div>
      <Card className="cards">
        {restaurants.map((restaurant) => (
          <Link key={restaurant._id} to={`/restaurant/${restaurant._id}`}>
            <h2 key={restaurant._id}>{restaurant.name}</h2>
            <Rating className="rating-restaurants" name="read-only" value={restaurant.rating} size="medium" readOnly />
            {/* <p>{restaurant.tags}</p> */}
            <img src={restaurant.image} alt={restaurant.name} />
            
          </Link>
        ))}
      </Card>
    </div>
  );
};

export default SearchResults;
