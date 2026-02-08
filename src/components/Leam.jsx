import React from "react";
import PropTypes from "prop-types";

const userData = [
  {
    name: "Muski",
    city: "New York",
    description: "Front-End developer",
    skills: ["UI/UX", "HTML", "CSS", "JavaScript", "React", "Node"],
    online: true,
    profile: "/images/3.jpg"
  },
  {
    name: "Ahamed",
    city: "New York",
    description: "Front-End developer",
    skills: ["UI/UX", "HTML", "CSS", "JavaScript", "React", "Node"],
    online: false,
    profile: "/images/3.jpg"
  }
];

function User({ name, city, description, skills, online, profile }) {
  return (
    <div className="card">
      <span className={online ? "pro online" : "pro offline"}>{online ? "online" : "offline"}</span>
      <img src={profile} alt="User" height={150} width={150} className="img" />
      <h3>{name}</h3>
      <p>{city}</p>
      <p>{description}</p>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired
};

const Leam = () => {
  return (
    <>
      {userData.map((user, idx) => (
        <User key={idx} {...user} />
      ))}
    </>
  );
};

export default Leam;
