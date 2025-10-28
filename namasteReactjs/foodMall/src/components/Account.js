const Account = () => {
  return (
    <div className="account-container">
      <h1>Welcome to FoodMall</h1>
      <div className="account-content">
        <section className="profile-section">
          <h2>Profile Information</h2>
          <div className="profile-details">
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 Food Street, Tasty City, FC 12345
            </p>
          </div>
          <button className="edit-button">Edit Profile</button>
        </section>

        <section className="settings-section">
          <h2>Account Settings</h2>
          <div className="settings-options">
            <button className="settings-button">Change Password</button>
            <button className="settings-button">Update Payment Methods</button>
            <button className="settings-button">Delete Account</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Account;
