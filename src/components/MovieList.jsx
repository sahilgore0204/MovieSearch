import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <div>
      <MovieCard
        title="Iron Man 3"
        imgURL="images/iron-man-3.jpg"
        year="2013"
      />
    </div>
  );
}
