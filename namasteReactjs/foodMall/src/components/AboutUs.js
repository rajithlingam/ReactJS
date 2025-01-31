// src/components/AboutUs.js
import React, { Component } from "react";
import aboutUsData from "../utils/aboutUsData"; // Import the JSON data

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [], // Initialize an empty array for team members
    };
  }

  // Fetch data when the component mounts
  componentDidMount() {
    this.setState({ teamMembers: aboutUsData }); // Set the data to state
  }

  render() {
    const { teamMembers } = this.state;

    return (
      <div className="about-us">
        <h1>About Us</h1>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h2>{member.username}</h2>
              <p>
                <strong>Role:</strong> {member.role}
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.linkedin}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AboutUs;
