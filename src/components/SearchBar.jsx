import React from "react";

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <input
        className="movie-input"
        name="movieName"
        type="text"
        placeholder="Enter the name of your favourite movie"
      />
      <button className="search-btn">Search</button>
    </div>
  );
}
