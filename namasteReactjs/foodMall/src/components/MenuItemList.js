import { URL_CDN_LOGO } from "../utils/url";

const MenuItemList = ({ items }) => {
  return (
    <div className="MenuItemList">
      {items.map((Menuitem) => (
        <div
          key={Menuitem?.card?.info?.id || Math.random()}
          className="menu-item"
        >
          <div className="menu-header">
            <h3 className="Menu-Name">
              {Menuitem?.card?.info?.name || "Unnamed Item"}
            </h3>
            <div className="menu-details">
              <p className="Menu-Price">
                Price: ₹
                {Menuitem?.card?.info?.finalPrice / 100 ||
                  Menuitem?.card?.info?.defaultPrice / 100 ||
                  Menuitem?.card?.info?.price / 100 ||
                  "Sorry For the Inconvenience, Out of Stock"}
                /-
              </p>
              <p className="Menu-Description">
                Description:{" "}
                {Menuitem?.card?.info?.description ||
                  "No description available"}
              </p>
            </div>
          </div>
          <div className="menu-image-container">
            {Menuitem?.card?.info?.imageId ? (
              <img
                className="Menu-Image"
                src={URL_CDN_LOGO + Menuitem.card.info.imageId}
                alt={Menuitem.card.info.name || "Menu Image"}
              />
            ) : (
              <p className="no-image">Image not available</p>
            )}
            <button className="add-button">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
