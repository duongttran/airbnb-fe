import React, { useState, useEffect } from "react";
import "./ExperienceList.css";
import faker from "faker/locale/en_CA";
import Card from "./Card";

var hours = [3, 6, 9, 12];
var rating = [1, 2, 3, 4, 5];
const rand = (items) => items[Math.floor(Math.random() * items.length)];

export default function ExperienceList() {
  const [experience, setExperience] = useState([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const data = await fetch("http://localhost:5000/experiences");
  //       const experiences = await data.json();
  //       setExperience(experiences);
  //     }
  //     fetchData();
  //   }, []);

  let array = new Array(20);
  let experiences = [...array]
    .map((x) => {
      return {
        pictureUrl: faker.image.image(),
        country: faker.address.country(),
        title: faker.lorem.words(),
        price: faker.commerce.price(),
        duration: rand(hours),
        rating: rand(rating),
        peopleRated: faker.random.number(),
        introduction: faker.lorem.paragraph(),
      };
    })
    .slice();
  console.log(experiences);

  return (
    <div className="experience-list">
      {experiences.map((e) => (
        <Card experience={e} />
      ))}
    </div>
  );
}
