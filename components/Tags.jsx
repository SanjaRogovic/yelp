import React, {useState, useEffect} from 'react'

const Tags = () => {
    const [tags, setTags] = useState("")
    // const {index} = useParams()


    const getRestaurantByTag = async () => {
      try {
        let config = {
          url: `https://mngotest.fly.dev/restaurants/?=${tags}`,
          method: "get",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        };
        const response = await axios(config);
        console.log(response.data.tags);
        setTags(response.data.tags);

        console.log(restaurant);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    useEffect(() => {
        getRestaurantByTag()
    }, [])

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} />
      <p>{restaurant.description}</p>
    </div>
  );
}

export default Tags