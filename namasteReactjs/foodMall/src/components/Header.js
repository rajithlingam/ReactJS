import { URL_LOGO } from "../utils/url";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [Log, setLog] = useState("Login");

  return (
    <div className="header">
      <div className="header-logo-container">
        <img className="header-logo" src={URL_LOGO} alt="foodmall logo" />
      </div>

      <div className="nav-item">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/Cart">
            <li>Cart</li>
          </Link>

          <Link to="/Offer">
            <li>Offer</li>
          </Link>

          <Link to="/Account">
            <li>Account</li>
          </Link>

          <li
            onClick={() => {
              setLog("Logout");
            }}
          >
            {Log}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
