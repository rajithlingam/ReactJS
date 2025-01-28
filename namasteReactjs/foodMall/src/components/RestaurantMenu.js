import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL_MENU, URL_CDN_LOGO } from "../utils/url";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const { resId } = useParams();
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

  return resMenu == 0 ? (
    <Shimmer />
  ) : (
    <div className="ResMenu">
      <h1>Menu Items:</h1>
      {resMenu.map((menuItem) => (
        <div key={menuItem?.card?.info?.id} className="menu-item">
          <div className="menu-details">
            <h3 className="Menu-Name">
              {menuItem?.card?.info?.name || "Unnamed Item"}
            </h3>
            <p className="Menu-Price">
              Price: ₹
              {menuItem?.card?.info?.finalPrice / 100 ||
                menuItem?.card?.info?.defaultPrice / 100 ||
                menuItem?.card?.info?.price / 100 ||
                "Sorry For the In Convinience Out Of Stock"}
            </p>
            <p className="Menu-Description">
              Description:{" "}
              {menuItem?.card?.info?.description || "No description available"}
            </p>
          </div>
          <div className="menu-image-container">
            <img
              className="Menu-Image"
              src={URL_CDN_LOGO + menuItem?.card?.info?.imageId}
              alt="Menu-Image"
            />
            <button className="add-button">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
