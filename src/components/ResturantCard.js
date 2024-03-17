import { IMG_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwoString } =
    resData?.data;
  return (
    <div className="cards">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="pic"
        className="order-img"
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}rating</h3>
      <h3>{costForTwoString}</h3>
    </div>
  );
};
export default ResturantCard;
