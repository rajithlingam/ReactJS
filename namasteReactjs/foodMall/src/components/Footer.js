
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer">
      <ul>
        <li>About Us</li>
        <li>Career</li>
        <li>Content</li>
      </ul>
      <ul>
        <li>Legal</li>
        <li>Social</li>
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