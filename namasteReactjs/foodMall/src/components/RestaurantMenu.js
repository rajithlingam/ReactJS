import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import { URL_CDN_LOGO } from "../utils/url";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  console.log(resMenu);
  return resMenu == 0 ? (
    <Shimmer />
  ) : (
    <div className="ResMenu">
      <div className="Menu-heading-txt">
        <h1>Menu Items:</h1>
      </div>

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
