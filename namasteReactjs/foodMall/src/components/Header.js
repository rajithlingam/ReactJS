import { URL_LOGO } from "../utils/url";
import { useState } from "react";


const Header = () => {

   const [Log, setLog] = useState("Login");

  return (
    <div className="header">
      <div className="header-logo-container">
        <img
          className="header-logo"
          src={URL_LOGO}
          alt="foodmall logo"
        />
      </div>

      <div className="nav-item">
        <ul>
          <li>Cart</li>
          <li>Offer</li>
          <li>Account</li>
          <li onClick={()=>{
            setLog("Logout");
          }}>{Log}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;