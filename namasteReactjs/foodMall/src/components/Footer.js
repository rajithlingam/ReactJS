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

        <Link to="/Content">
          <li>Content</li>
        </Link>
      </ul>

      <ul>
        <Link>
          <li>Legal</li>
        </Link>

        <Link>
          <li>Social</li>
        </Link>
      </ul>

      <div className="footer-logo-container">
        <img
          className="footer-logo"
          src="https://tse2.mm.bing.net/th?id=OIG4.n2dyP_ydktvxnkqr1adX&pid=ImgGn"
          alt="foodmall logo"
        />
      </div>
      <h6>© {year} FoodMaLL Limited</h6>
    </div>
  );
};

export default Footer;
