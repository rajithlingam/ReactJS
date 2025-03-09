import { useSelector } from "react-redux";
import CartItemList from "./CartItemList"; // ✅ Correct capitalization

const Cart = () => {
  const cartDisplayItems = useSelector((store) => store.cart.items) || []; // ✅ Ensure it's an array

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <div>
        <CartItemList items={cartDisplayItems} /> {/* ✅ Correct JSX usage */}
      </div>
    </div>
  );
};

export default Cart;