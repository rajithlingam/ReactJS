import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  
  const { items: cartDisplayItems } = useSelector((store) => store.cart) || {
    items: [],
  };
  
  const dispatch = useDispatch();
  const removeAllBtn = () => {
    if (cartDisplayItems.length > 0) {
      const confirmClear = window.confirm(
        "Are you sure you want to remove all items from the cart?"
      );
      if (confirmClear) {
        dispatch(clearCart());
      }
    }
  };

  return (
    <div className="Cart">
      <div className="CartHeading">
        <h1>Cart</h1>
          <button className="RemoveAllButton" onClick={removeAllBtn}>
            Remove All
          </button>
        
      </div>
      <div>
        {cartDisplayItems.length > 0 ? (
          <CartItemList items={cartDisplayItems} />
        ) : (
          <p className="EmptyCartMessage">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;