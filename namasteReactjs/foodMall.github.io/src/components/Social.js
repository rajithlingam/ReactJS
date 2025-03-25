
const Social = () => {
  return (
    <div className="social-container">
      <h1>Welcome to FoodMall Social</h1>
      <h2>Connect With Us</h2>
      <p>
        Stay updated with the latest news, offers, and community events by
        following us on our social media platforms.
      </p>

      <section className="social-links">
        <h3>Our Social Media</h3>
        <div className="social-card">
          <a
            href="https://www.facebook.com/share/14wp4WdwURe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt="Facebook"
            />
            <p>Facebook</p>
          </a>
        </div>

        <div className="social-card">
          <a
            href="https://x.com/rajithlingam_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              alt="Twitter"
            />
            <p>Twitter</p>
          </a>
        </div>

        <div className="social-card">
          <a
            href="https://www.instagram.com/rajithlingam_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
            />
            <p>Instagram</p>
          </a>
        </div>

        <div className="social-card">
          <a
            href="https://www.linkedin.com/in/rajithlingam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
            <p>LinkedIn</p>
          </a>
        </div>
      </section>

      <section className="community-section">
        <h3>Join Our Community</h3>
        <p>
          Be a part of our growing community! Share your experiences, recipes,
          and feedback with us. Together, we can make FoodMall even better.
        </p>
        <button className="community-button">Join Now</button>
      </section>
    </div>
  );
};

export default Social;
