import React from "react";
import faker from "faker/locale/en_CA";

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
      <h5>
        From ${price}/person • {duration}h
      </h5>
      <h3>{introduction}</h3>
      <h4>
        ★ {rating} ({peopleRated})
      </h4>
    </div>
  );
}
