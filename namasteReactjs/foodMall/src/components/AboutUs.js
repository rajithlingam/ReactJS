//

import React, { Component } from "react";
import aboutUsData from "../utils/aboutUsData";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [],
      count: 0,
    };
    console.log("constructor();");
  }

  componentDidMount() {
    this.setState({ teamMembers: aboutUsData });
    console.log("componentDidMount");
  }
 
  render() {
    const { teamMembers, count } = this.state;
    console.log("render();");
    return (
      <div className="about-us">
        <h1>About Us</h1>

        <div
          className="team-list"
          onClick={() => {
            this.setState({ count: count + 1 });
            console.log(count);
          }}
        >
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
