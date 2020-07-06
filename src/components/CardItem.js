import React from "react";

export default function Card(props) {
  const {
    images,
    country,
    title,
    price,
    introduction,
    duration,
    rating,
    peopleRated,
  } = props.experience;

  return (
    <div className="card-item">
      <div class="img-hover-zoom img-hover-zoom--colorize">
        <img src={images} />
      </div>

      <p className="country">{country}</p>
      <p class="title">
        <a href="#">{title}</a>
      </p>
      <p class="price">
        From ${price}/person • {duration}h
      </p>
      <p>{introduction}</p>
      <p>
        ★ {rating} ({peopleRated})
      </p>
    </div>
  );
}
