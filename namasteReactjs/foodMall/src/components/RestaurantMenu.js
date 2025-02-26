import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import RestaurantMenuCategories from "./RestaurantMenuCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [isOpen, setIsOpen] = useState(0);
  console.log("RestaurantMenu");
  console.log(resMenu);
  return resMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="ResMenu">
      <div className="Menu-heading-txt">
        <h1>Menu Items:</h1>
      </div>

      {resMenu.map((menuItem, index) => (
        <RestaurantMenuCategories
          key={menuItem.card.card.title}
          data={menuItem.card.card}
          parentControledAccordion={index === isOpen ? true : false}
          parentControledAccordionUpdate={() => setIsOpen(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
