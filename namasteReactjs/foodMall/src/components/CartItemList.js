import { useDispatch } from "react-redux";
import { URL_CDN_LOGO } from "../utils/url";
import { removeItem } from "../utils/cartSlice";

const CartItemList = ({ items = [] }) => {
  const dispatchRmBtn = useDispatch();
  const removeBtn = (menuItem) => {
    dispatchRmBtn(removeItem(menuItem));
  };
  return (
    <div className="CartItemList">
      {items?.length > 0 ? (
        items.map((menuItem) => (
          <div key={menuItem?.card?.info?.id} className="Cart-item">
            <div className="Cart-header">
              <h3 className="Cart-Name">
                {menuItem?.card?.info?.name || "Unnamed Item"}
              </h3>
              <div className="Cart-details">
                <p className="Cart-Price">
                  Price: ₹
                  {menuItem?.card?.info?.finalPrice / 100 ||
                    menuItem?.card?.info?.defaultPrice / 100 ||
                    menuItem?.card?.info?.price / 100 ||
                    "Sorry For the Inconvenience, Out of Stock"}
                  /-
                </p>
                <p className="Cart-Description">
                  Description:{" "}
                  {menuItem?.card?.info?.description ||
                    "No description available"}
                </p>
              </div>
            </div>
            <div className="Cart-image-container">
              {menuItem?.card?.info?.imageId ? (
                <img
                  className="Cart-Image"
                  src={URL_CDN_LOGO + menuItem.card.info.imageId}
                  alt={menuItem.card.info.name || "Menu Image"}
                />
              ) : (
                <p className="no-image">Image not available</p>
              )}
              {/* <button
                className="Remove-button"
                onClick={()=>removeBtn(menuItem)}
              >
                Remove
              </button> */}
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
