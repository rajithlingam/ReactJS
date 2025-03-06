import { useContext, useState } from "react";
import { Link } from "react-router";
import { URL_LOGO } from "../utils/url";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [Log, setLog] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { name } = useContext(UserContext);
  const [username, setUsername] = useState(name);

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
            <li>Online Status: {onlineStatus ? "💚" : "⛔"}</li>

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

            <li onClick={handleLogin}>{Log}</li>

            <li>{username}</li>
          </ul>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Header;
