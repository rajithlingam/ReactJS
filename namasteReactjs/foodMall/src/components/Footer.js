import { Link } from "react-router";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer">
      <ul>
        <Link to="/AboutUs">
          <li>About Us</li>
        </Link>

        <Link to="/Career">
          <li>Career</li>
        </Link>

        <Link to="/Contact">
          <li>Contact</li>
        </Link>
      </ul>

      <ul>
        <Link to="/Legal">
          <li>Legal</li>
        </Link>

        <Link to="/Social">
          <li>Social</li>
        </Link>
      </ul>

      <div className="footer-logo-container">
        <img
          className="footer-logo"
          src="https://raw.githubusercontent.com/rajithlingam/ReactJS/refs/heads/main/namasteReactjs/foodMall/asstes/FoodMaLL_logo.png"
          alt="foodmall logo"
        />
      </div>
      <h6>© {year} FoodMaLL Limited</h6>
    </div>
  );
};

export default Footer;
