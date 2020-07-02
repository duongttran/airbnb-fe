import React from "react";

export default function Card(props) {
  const {
    pictureUrl,
    country,
    title,
    price,
    introduction,
    duration,
    rating,
    peopleRated,
  } = props.experience;

  return (
    <div className="card">
      <div class="img-hover-zoom img-hover-zoom--colorize">
        <img src={pictureUrl} />
      </div>

      <p className="country">{country}</p>
      <h2>{title}</h2>
      <h4>
        From ${price}/person • {duration}h
      </h4>
      <h3>{introduction}</h3>
      <h5>
        ★ {rating} ({peopleRated})
      </h5>
    </div>
  );
}
