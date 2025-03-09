import { URL_CDN_LOGO } from "../utils/url";

const CartItemList = ({ items = [] }) => {
  return (
    <div className="MenuItemList">
      {items?.length > 0 ? (
        items.map((menuItem) => (
          <div key={menuItem?.card?.info?.id} className="menu-item">
            <div className="menu-header">
              <h3 className="Menu-Name">
                {menuItem?.card?.info?.name || "Unnamed Item"}
              </h3>
              <div className="menu-details">
                <p className="Menu-Price">
                  Price: ₹
                  {menuItem?.card?.info?.finalPrice / 100 ||
                    menuItem?.card?.info?.defaultPrice / 100 ||
                    menuItem?.card?.info?.price / 100 ||
                    "Sorry For the Inconvenience, Out of Stock"}
                  /-
                </p>
                <p className="Menu-Description">
                  Description:{" "}
                  {menuItem?.card?.info?.description ||
                    "No description available"}
                </p>
              </div>
            </div>
            <div className="menu-image-container">
              {menuItem?.card?.info?.imageId ? (
                <img
                  className="Menu-Image"
                  src={URL_CDN_LOGO + menuItem.card.info.imageId}
                  alt={menuItem.card.info.name || "Menu Image"}
                />
              ) : (
                <p className="no-image">Image not available</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartItemList;
