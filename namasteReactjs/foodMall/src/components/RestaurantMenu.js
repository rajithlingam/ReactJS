import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  
  useEffect(() => {fetchResMenu();}, []);

  const [resMenu, setresMenu] = useState([]);

  const fetchResMenu = async () => {
    const API_objLink_Menu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.664325&lng=78.1460142&restaurantId=431525&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonMenuData = await API_objLink_Menu.json();
    console.log(
      jsonMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setresMenu(
      jsonMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  return resMenu === 0 ? (
    <Shimmer />
  ) : (
    <div className="ResMenu">
      <h1>{resMenu}</h1>
    </div>
  );
};

export default RestaurantMenu;