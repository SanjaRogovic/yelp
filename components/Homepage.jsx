import React, {useState} from 'react'
import SearchResults from './SearchResults'
// import {Link} from "react-router-dom"
// import { useParams } from 'react-router-dom';

const Homepage = () => {
    const [input, setInput] = useState("")
    const [city, setCity] = useState("")
    const [restaurants, setRestaurants] = useState([])
    // const { index } = useParams();

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        //fetch func
        // console.log("fetching data")
    }

    const handleInput = (e) => {
        setInput(e.target.value)
        // console.log(input)
    }

    const handleCityInput = (e) => {
        setCity(e.target.value)
        console.log(city)
    }


  return (
    <div className="container">
      <header>
        <h1>YELP</h1>
      </header>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search food"
          value={input}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={handleCityInput}
        />
        <button type="submit">
          Search
        </button>
      </form>
      <SearchResults restaurants={restaurants}/>
      {/* {restaurants.length > 0 ? <SearchResults restaurants={restaurants} /> : null} */}
      {/* <Link key={index} to="/searchResults"></Link> */}
      
    </div>
  );
}

export default Homepage