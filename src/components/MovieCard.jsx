import React from "react";


export default function MovieCard(props) {
  return (
    <div style={{width:"15%",display:"inline-block",marginRight:"40px",height:"100%"}} className="movie-card">
      <h2 style={{textAlign:"center"}}>{props.title}</h2>
      <img style={{width:"100%",height:"250px"}} src={props.imgURL} alt="" />
      <p style={{textAlign:"center"}}>{props.year}</p>
    </div>
  );
}
   