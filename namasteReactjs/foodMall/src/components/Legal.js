
const Legal = () => {
  return (
    <div className="legal-container">
      <h1>Welcome to FoodMall</h1>
      <h2>Legal Information</h2>
      <div className="legal-content">
        <section>
          <h3>Terms and Conditions</h3>
          <p>
            By using FoodMall, you agree to comply with and be bound by the
            following terms and conditions. Please read these terms carefully
            before using our services.
          </p>
          <ul>
            <li>You must be at least 18 years old to use this platform.</li>
            <li>
              All orders are subject to availability and confirmation of the
              order price.
            </li>
            <li>
              We reserve the right to refuse service to anyone for any reason at
              any time.
            </li>
          </ul>
        </section>

        <section>
          <h3>Privacy Policy</h3>
          <p>
            Your privacy is important to us. This privacy policy explains how we
            collect, use, and protect your personal information.
          </p>
          <ul>
            <li>
              We collect personal information such as name, email, and payment
              details.
            </li>
            <li>
              Your information is used to process orders and improve our
              services.
            </li>
            <li>
              We do not share your information with third parties without your
              consent.
            </li>
          </ul>
        </section>

        <section>
          <h3>Refund Policy</h3>
          <p>
            If you are not satisfied with your purchase, you may be eligible for
            a refund. Please review our refund policy for more details.
          </p>
          <ul>
            <li>Refunds are processed within 7-10 business days.</li>
            <li>
              To be eligible for a refund, you must return the product in its
              original condition.
            </li>
            <li>Shipping costs are non-refundable.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Legal;
