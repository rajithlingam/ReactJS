import { useContext, useState } from "react";
import { Link } from "react-router";
import { URL_LOGO } from "../utils/url";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [Log, setLog] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { name } = useContext(UserContext);
  const [username, setUsername] = useState(name);

  const showSelector = useSelector((store) => store.cart.items);

  const handleLogin = () => {
    if (Log === "Login") {
      const updateUserName = prompt("Kindly Enter Your Name");
      setUsername(updateUserName);
      setLog("Logout");
    } else {
      setUsername("Guest");
      setLog("Login");
    }
  };

  return (
    <UserContext.Provider value={{ name: username }}>
      <div className="header">
        <div className="header-logo-container">
          <img className="header-logo" src={URL_LOGO} alt="foodmall logo" />
        </div>

        <div className="nav-item">
          <ul>
            <li>
              <button className="nav-button">
                Online Status: {onlineStatus ? "💚" : "⛔"}
              </button>
            </li>

            <li>
              <Link to="/">
                <button className="nav-button">Home</button>
              </Link>
            </li>

            <li>
              <Link to="/Cart">
                <button className="nav-button">
                  Cart ({showSelector.length})
                </button>
              </Link>
            </li>

            <li>
              <Link to="/Offer">
                <button className="nav-button">Offer</button>
              </Link>
            </li>

            <li>
              <Link to="/Account">
                <button className="nav-button">Account</button>
              </Link>
            </li>

            <li>
              <button className="nav-button" onClick={handleLogin}>
                {Log}
              </button>
            </li>

            <li>
              <button className="nav-button">{username}</button>
            </li>
          </ul>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Header;
