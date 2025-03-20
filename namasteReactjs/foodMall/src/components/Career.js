const Career = () => {
  return (
    <div className="career-container">
      <h1>Welcome to FoodMall Careers</h1>
      <h2>Join Our Team</h2>
      <p>
        At FoodMall, we believe in creating a workplace where everyone can
        thrive. Explore our current job openings and become a part of our
        growing team.
      </p>

      <section className="job-listings">
        <h3>Current Job Openings</h3>
        <div className="job-card">
          <h4>Software Engineer</h4>
          <p>
            <strong>Location:</strong> Bengaluru, India
          </p>
          <p>
            <strong>Type:</strong> Full-time
          </p>
          <p>
            We are looking for a talented Software Engineer to join our team and
            help us build innovative solutions for our customers.
          </p>
          <div className="button-container">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>

        <div className="job-card">
          <h4>Product Manager</h4>
          <p>
            <strong>Location:</strong> Mumbai, India
          </p>
          <p>
            <strong>Type:</strong> Full-time
          </p>
          <p>
            We are seeking a Product Manager to lead the development of our
            next-generation food delivery platform.
          </p>
          <div className="button-container">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>

        <div className="job-card">
          <h4>Marketing Specialist</h4>
          <p>
            <strong>Location:</strong> Delhi, India
          </p>
          <p>
            <strong>Type:</strong> Part-time
          </p>
          <p>
            Join our marketing team and help us create engaging campaigns to
            promote FoodMall's services.
          </p>
          <div className="button-container">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h3>Why Work at FoodMall?</h3>
        <ul>
          <li>Competitive salaries and benefits</li>
          <li>Flexible working hours</li>
          <li>Opportunities for career growth</li>
          <li>Inclusive and diverse workplace</li>
          <li>Employee discounts on FoodMall services</li>
        </ul>
      </section>
    </div>
  );
};

export default Career;
