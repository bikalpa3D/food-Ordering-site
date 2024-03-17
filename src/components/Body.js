import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="search"></input>
        <button type="submit">Search</button>
      </div>
      <div className="Res-Container">
        {resList.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
