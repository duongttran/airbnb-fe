import React, { useState, useEffect } from "react";
import "./ExperienceList.css";
//import faker from "faker/locale/en";
import CardItem from "./CardItem";
import { Jumbotron, Button, Container, Row } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

import Pagination from "@material-ui/lab/Pagination";

import { Dropdown } from "react-bootstrap/";

import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap/";

import Rheostat from "rheostat";

import "rheostat/initialize";
import "rheostat/css/rheostat.css";

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

  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [isDragging, setIsDragging] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  const fetchData = async (p = 1) => {
    const data = await fetch(
      `https://group7-airbnb-website.herokuapp.com/experiences?page=${p}&minPrice=${minPrice}&maxPrice=${maxPrice}`
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

  let ratingRange = (order) => {
    const rating = experiences.map((one) => one.price);
    const duplicateExpList = [...experiences];
    const sortedExpList = duplicateExpList.sort(function (a, b) {
      return (a.rating - b.rating) * order;
    });
    setExperiences(sortedExpList);
  };

  const handleChange = (e) => {
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="/">My AirBnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/add">Add</Nav.Link>
            <Nav.Link href="#link">Update</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>

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
      <div class="container">
        <Rheostat
          min={1}
          max={1000}
          values={[minPrice, maxPrice]}
          onChange={handleChange}
        />
      </div>
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
              Sort by rating
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => ratingRange(-1)}>
                High to Low
              </Dropdown.Item>
              <Dropdown.Item onClick={() => ratingRange(1)}>
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
