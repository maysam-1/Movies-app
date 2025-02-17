import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function GetMovies(props){
    const[movies,setMovies]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[category,setCategory]=useState('All')
   useEffect(()=>{
    async function fetch(){
        try{
            isLoading&&<h1>loading...</h1>
           const res= await axios.get(`http://localhost:5000/movies`)
            setIsLoading(false)
            const categorizedM = res.data.filter((movie) => {
                if (props.category === "All") {
                  return true; // Keep all movies
                } else {
                  return movie.category === props.category; // Match exact category
                }
              });
              
              setMovies(categorizedM);
            setCategory(props.category)
            
        }catch(err){
            console.log(err)
        }
    }
    fetch()
   },[props.category]) 

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