import React, { useState, useEffect } from "react";
import "./ExperienceList.css";

export default function ExperienceList() {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000/experiences");
      const experiences = await data.json();
      setExperience(experiences);
    }
    fetchData();
  }, []);
  return (
    <div>
      {experience.map((e) => (
        <Experience experience={e} />
      ))}
    </div>
  );
}

const Experience = (props) => {
  const { title, pictureUrl, country, duration, price } = props.experience;
  return (
    <div>
      <h2>{title}</h2>
      <img src={pictureUrl} />
      <h3>{country}</h3>
      <h4>{duration}</h4>
      <h5>{price}</h5>
    </div>
  );
};
