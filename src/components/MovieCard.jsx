import React from "react";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      <h2>{props.title}</h2>
      <img src={props.imgURL} alt="" />
      <p>{props.year}</p>
    </div>
  );
}
