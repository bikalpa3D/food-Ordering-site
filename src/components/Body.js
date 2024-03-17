import { useState } from "react";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(resList);
  return (
    <div className="body">
      <div className="search-bar">
        <button
          className="filtered-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfResturant(filteredList);
            
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="Res-Container">
        {listOfResturant.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
