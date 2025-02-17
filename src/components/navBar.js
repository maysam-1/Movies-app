import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import GetMovies from "./getMovies";

const Navbar = (props) => {
    const[category,setCategory]=useState('All')
    const [showMovies, setShowMovies] = useState(false);
    const[count,setCount]=useState(0);

  return (
    <div id="dark-theme-body">
      <div className="container">
        <a style={{color:"white"}} href="src\components\getMovies.js"></a>
        <div className="search-bar">
          <input
            type="text"
            id="search-input"
            placeholder="Search for a movie..."
           
          />
          <button id="search-button">Search</button>
        </div>
        
        
        <div className="filter-dropdown">
            <select onChange={(e)=>{setCategory(e.target.value)}}>
            <option value={"All"}>All</option>
            <option value={"Sci-Fi"}>Sci-Fi</option>
            <option value={"Action"}>Action</option>
            <option value={"Adventure"}>Adventure</option>
            <option value={"Romance"}>Romance</option>
            <option value={"Thriller"}>Thriller</option>
            <option value={"Fantasy"}>Fantasy</option>
            <option value={"Drama"}>Drama</option>
    
            </select>
            <button id="search-button" onClick={()=>
                setShowMovies(true)
                
            }>Filter</button>

         
        </div>
     </div>
     {showMovies && <GetMovies category={category} />}

     </div>
  );
};

export default Navbar;
