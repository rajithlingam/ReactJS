import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const API_objLink_Menu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.664325&lng=78.1460142&restaurantId=431525&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonMenuData = await API_objLink_Menu.json();

    // Check if the structure is valid before proceeding
    if (
      jsonMenuData?.data?.cards &&
      jsonMenuData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ) {
      const MapMenuData =
        jsonMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(
          1
        );

      const menuItems = MapMenuData.flatMap((menuCard) =>
        menuCard?.card?.card?.itemCards?.map((itemCard) => itemCard?.card?.info)
      );

      // Filter out invalid entries
      const validMenuItems = menuItems.filter((item) => item?.name && item?.id);

      console.log("Processed Menu Items:", validMenuItems);
      setResMenu(validMenuItems);
    }

    setLoading(false); // Set loading to false after processing
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="ResMenu">
      <h1>Menu Items:</h1>
      {resMenu.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        resMenu.map((menuItem) => (
          <div key={menuItem.id} className="menu-item">
            <h3>{menuItem.name}</h3>
            <p>Price: ₹{menuItem.defaultPrice/100 || "N/A"}</p>
            <p>
              Description: {menuItem.description || "No description available"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantMenu;
