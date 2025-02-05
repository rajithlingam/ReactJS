import { useEffect, useState } from "react";
import { API_URL_MENU } from "../utils/url";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const API_objLink_Menu = await fetch(API_URL_MENU + resId);

    const jsonMenuData = await API_objLink_Menu.json();

    const MapMenuData =
      jsonMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.slice(1)
        .flatMap((test) => test.card?.card?.itemCards);
    console.log(MapMenuData);
    setResMenu(MapMenuData);
  };
  return resMenu;
};

export default useRestaurantMenu;
