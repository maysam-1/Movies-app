import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fetchMovies(category) {
  const res = await axios.get("http://localhost:5000/movies");
  
  const filteredMovies = res.data.filter((movie) => 
    category === "All" ? true : movie.category.includes(category) 
  );

  return filteredMovies; 
}

function GetMovies(props){
  
  const category=props.category
  const { data: movies = [], error, isLoading } = useQuery({
    queryKey: ["movies", category], 
    queryFn: () => fetchMovies(category),
    staleTime: 5000,
  });
   isLoading&&<h1>is loading...</h1>
   error&&console.log(error.message)
   return(
    <ul style={{listStyleType:"none",display:"flex",flexWrap:"wrap",color:"white"}}>
   {
    !isLoading && 
    movies.map((movie)=>{
    return <li key={movie.id} style={{margin:"20px"}}>
        <div style={{margin:"10px"}}>
        <h1 style={{maxWidth:"300px"}}>{movie.title}</h1>
        <h4>year:{movie.year}</h4>
        <h4>{movie.category}</h4>
        <p style={{width:"300px"}}>{movie.description}</p>
        <img style={{width:"150px",height:"200px"}} src={movie.img}/>
        </div>
    </li>
    
    
    })}

   </ul>)
   
    
}

export default GetMovies;