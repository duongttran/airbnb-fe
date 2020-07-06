import React, { useState, useEffect } from "react";
import "./ExperienceList.css";
//import faker from "faker/locale/en";
import CardItem from "./CardItem";
import { Jumbotron, Button, Container, Row } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

import Pagination from "@material-ui/lab/Pagination";

import Rheostat from "rheostat";

import { Dropdown } from "react-bootstrap/";

// var hours = [3, 6, 9, 12];
// var rating = [1, 2, 3, 4, 5];
var jumbotronPhoto = [
  "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];
// const rand = (items) => items[Math.floor(Math.random() * items.length)];

export default function ExperienceList() {
  const [experiences, setExperiences] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  useEffect(() => {
    fetchData();
  }, [currentPage]);
  const fetchData = async (p = 1) => {
    const data = await fetch(
      `https://group7-airbnb-website.herokuapp.com/experiences?page=${p}`
    );
    const experiencesData = await data.json();
    console.log("total", experiencesData.data);
    console.log("each page", experiencesData.data.fakeExperiences);
    experiencesData.data.perPage = 25;
    setMaxPage(
      Math.ceil(experiencesData.data.count / experiencesData.data.perPage)
    );
    setExperiences(experiencesData.data.fakeExperiences);
  };

  //   experience.find({ price : { $and: [{$gt: minPrice}, {$lte :maxPrice}]})

  // let array = new Array(30);
  // let experiences = [...array]
  //   .map((x) => {
  //     return {
  //       pictureUrl: faker.image.image(),
  //       country: faker.address.country(),
  //       title: faker.lorem.sentence(),
  //       price: faker.commerce.price(),
  //       duration: rand(hours),
  //       rating: rand(rating),
  //       peopleRated: faker.random.number(),
  //       introduction: faker.lorem.sentences(),
  //     };
  //   })
  //   .slice();
  // console.log(experiences);

  //   const goPrevPage = () => {
  //     setCurrentPage(currentPage - 1);
  //   };

  //   const goNextPage = () => {
  //     setCurrentPage(currentPage + 1);
  //   };

  let priceRange = (order) => {
    const price = experiences.map((el) => el.price);
    console.log("price", price);

    const duplicateExpList = [...experiences];
    const sortedExpList = duplicateExpList.sort(function (a, b) {
      return (a.price - b.price) * order;
    });
    console.log(sortedExpList);
    setExperiences(sortedExpList);
  };

  let durationRange = (order) => {
    const duration = experiences.map((one) => one.price);
    const duplicateExpList = [...experiences];
    const sortedExpList = duplicateExpList.sort(function (a, b) {
      return (a.duration - b.duration) * order;
    });
    setExperiences(sortedExpList);
  };

  return (
    <div>
      <Jumbotron className="jumbotron">
        {/* <div class="jumbotron-photo"> */}
        {/* <img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> */}
        {/* </div> */}

        <div class="col-md-4">
          <div className="jumbotron-text">
            <h1 class="page-title">Online Experiences</h1>
            <p class="page-title">
              Unique activities to do from home, including cooking experiences
              with world-renowned chefs
            </p>
          </div>
        </div>
      </Jumbotron>
      <div class="filter">
        <div class="sort-by">
          <Dropdown className="dropdown-filter">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Sort by Price
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => priceRange(-1)}>
                High to Low
              </Dropdown.Item>
              <Dropdown.Item onClick={() => priceRange(1)}>
                Low to High
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown-filter">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Sort by Duration
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => durationRange(-1)}>
                High to Low
              </Dropdown.Item>
              <Dropdown.Item onClick={() => durationRange(1)}>
                Low to High
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div class="pagination">
          <Pagination
            count={maxPage}
            onChange={(e, p) => {
              fetchData(p);
            }}
          />
        </div>
      </div>
      <div className="experience-list">
        {experiences.map((e) => (
          <CardItem experience={e} />
        ))}
      </div>
    </div>
  );
}
