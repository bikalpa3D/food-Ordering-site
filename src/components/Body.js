import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfResturant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log("json", jsonData);
  };

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <button
          className="filtered-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="Res-Container">
        {listOfResturant.map((resturant) => (
          <ResturantCard key={resturant?.info?.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
