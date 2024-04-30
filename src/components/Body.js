import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./shimmer";
// import { ShimmerPostList } from "react-shimmer-effects";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredListResturant, setFilteredListResturant] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfResturant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListResturant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <div>
          <input
            type="text"
            placeholder="Search Restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredResturtant = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredListResturant(filteredResturtant);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredListResturant.map((resturant) => (
          <ResturantCard key={resturant?.info?.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
