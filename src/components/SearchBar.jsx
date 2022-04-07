import React,{useState} from "react";

export default function SearchBar(props) {
  const [movieName,setMovieName]=useState("");
  function handleClick(){
    if(movieName.length===0)
    return;
    fetch(`https://www.omdbapi.com/?apikey=7d51d997&t=${movieName}`)
    .then(res=>res.json())
    .then(data=>{
      if(data.Response==="False"){
        alert("No movie found with given name");
      }
      else{
        alert(`${data.Title}: ${data.Plot}`);
      }
    })
    //console.log(movieName)
  }
  function handleChange(event){
    setMovieName(event.target.value);
  }
  return (
    <div className="searchBar">
      <form onSubmit={(event)=>{event.preventDefault()}}>
      <input
        onChange={handleChange}
        className="movie-input"
        name="movieName"
        type="text"
        placeholder="Enter the name of your favourite movie"
        value={movieName}
      />
      <button type="submit" onClick={handleClick} className="search-btn">Search</button>
      </form>
    </div>
  );
}
