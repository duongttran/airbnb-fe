import React, { useState } from "react";
import "./AddExperience.css";

const AddExperience = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pictureUrl, setPictureUrl] = useState("");

  const createExperience = async (e) => {
    e.preventDefault();
    const experienceData = {
      title,
      country,
      price,
      duration,
      pictureUrl,
    };

    const newExperience = await fetch("http://localhost:3000/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experienceData),
    });
    alert("Yay experience created");
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>Create your experience</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <form onSubmit={createExperience}>
              <label for="title">Title:</label>
              <br />
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />

              <label for="country">Country:</label>
              <br />
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <br />

              <label for="price">Price:</label>
              <br />
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <br />

              <label for="duration">Duration:</label>
              <br />
              <input
                type="text"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <br />

              <label for="pictureUrl">Photo url:</label>
              <br />
              <input
                type="text"
                name="pictureUrl"
                value={pictureUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
              />
              <br />
              <button class="green-btn" onClick={createExperience}>
                Create Experience
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
