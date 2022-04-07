import React,{useState} from "react";
import MovieCard from "./MovieCard";
import filmList from "../filmList";
//api key: 7d51d997
let styleObj={
  width:"90%",
  marginLeft:"5%",
  marginTop:"75px"
}


export default function MovieList(props) {
  return (
    <div style={styleObj}>
    <h1 style={{textAlign:"center"}}>Our Top Choices</h1>
    <div style={{textAlign:"center"}} className="movie-row">{filmList.map((film)=>{
        return <MovieCard key={film.id} title={film.title} imgURL={film.imgURL} year={film.year} />
      })}</div>
    </div>
  );
}
