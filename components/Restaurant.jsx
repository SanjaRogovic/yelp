import React, { useState, useEffect } from "react";
import Map from "./Map";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(false);
  const { index } = useParams();

  const getRestaurant = async () => {
    try {
      setLoading(true);
      let config = {
        url: `https://mngotest.fly.dev/restaurants/${index}`,
        method: "get",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
        },
      };
      const response = await axios(config);
      console.log(response.data);
      setRestaurant(response.data);

      console.log(restaurant);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
      setRestaurant("");
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <div>
      <div className="returnBtn">
        <Button className="homebutton" variant="warning">
          <Link className="link-home" key={index} to={`/`}>
            ← BACK
          </Link>
        </Button>
      </div>

      {/* {JSON.stringify(restaurant)} */}

      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className="paragraphContent">Content loading ...</p>
        </div>
      ) : null}

      <Card className="card">
        <h2>{restaurant.name}</h2>
        <Rating
          className="rating-restaurant"
          name="read-only"
          value={restaurant.rating}
          size="small"
          readOnly
        />
        <img src={restaurant.image} alt={restaurant.name} />
        <p>{restaurant.description}</p>
        {Object.keys(restaurant).length ? (
          <Map restaurant={restaurant} />
        ) : null}
      </Card>
    </div>
  );
};

export default Restaurant;
