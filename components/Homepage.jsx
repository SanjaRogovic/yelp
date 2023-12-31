import React, { useState } from "react";
import SearchResults from "./SearchResults";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState("");

  const handleSearchSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      let config = {
        url: "https://mngotest.fly.dev/restaurants",
        method: "get",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
        },
      };
      const response = await axios(config);
      setRestaurants(response.data);
      setTags(response.data.tags);

      console.log(restaurants);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
      setInput("")
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    // console.log(input)
  };

  const handleCityInput = (e) => {
    setCity(e.target.value);
    // console.log(city)
  };

  return (
    <div className="container">
      <header>
        <a href="/">
          <h1>YELP</h1>
        </a>
      </header>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a food type"
          value={input}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Search for a City"
          value={city}
          onChange={handleCityInput}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className="paragraphContent">Content loading ...</p>
        </div>
      ) : null}
      {restaurants.length > 0 ? (
        <SearchResults restaurants={restaurants} />
      ) : null}
    </div>
  );
};

export default Homepage;
