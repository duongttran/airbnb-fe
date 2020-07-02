import React, { useState, useEffect } from "react";
import "./ExperienceList.css";
import faker from "faker/locale/vi";
import Card from "./Card";
import { Jumbotron, Button, Container, Row } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

var hours = [3, 6, 9, 12];
var rating = [1, 2, 3, 4, 5];
var jumbotronPhoto = [
  "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];
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

  let array = new Array(30);
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
        introduction: faker.lorem.sentences(),
      };
    })
    .slice();
  console.log(experiences);

  return (
    <div>
      <Jumbotron className="jumbotron">
        {/* <div class="jumbotron-photo">
          <img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div> */}

        <div className="jumbotron-text">
          <h1>Hello, world!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            repellendus saepe consequuntur corrupti recusandae totam non fugit.
            Qui harum sapiente minus fugiat nobis maiores quia minima architecto
            molestias earum sit, optio et possimus ab veniam velit iure
            voluptatem aliquam necessitatibus nemo labore est? Quaerat magni rem
            corporis odio optio provident.
          </p>
        </div>

        <Button variant="primary">Learn more</Button>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div class="col-md-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            officiis accusantium voluptatibus obcaecati ducimus. Laudantium, id
            ea nobis sapiente voluptatum eius tempora praesentium, harum
            corporis quos illum saepe neque molestias quae voluptatem fugit odio
            in perferendis! Minus commodi quas non aliquam omnis, pariatur
            atque, quo iure, nostrum dignissimos unde mollitia.
          </div>

          <div class="col-md-8">
            Opsum dolor sit amet consectetur adipisicing elit. Neque officiis
            accusantium voluptatibus obcaecati ducimus. Laudantium, id ea nobis
            sapiente voluptatum eius tempora praesentium, harum corporis quos
            illum saepe neque molestias quae voluptatem fugit odio in
            perferendis! Minus commodi quas non aliquam omnis, pariatur atque,
            quo iure, nostrum dignissimos unde mollitia.
          </div>
        </div>
      </div>

      <div className="experience-list">
        {experiences.map((e) => (
          <Card experience={e} />
        ))}
      </div>
    </div>
  );
}
