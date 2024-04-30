import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Menu_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setMenu(json?.data);
  };

  if (menu === null) return <Shimmer />;
  const { costForTwoMessage, id, name, cuisines } =
    menu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((itemcard) => (
          <li key={itemcard?.card?.info?.id}>
            {itemcard?.card?.info?.name} - Rs{" "}
            {itemcard?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
