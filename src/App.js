import React from "react";
import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
export default function App() {
  return (
    <div className="App">
      <Heading />
      <SearchBar />
      <MovieList />
    </div>
  );
}
