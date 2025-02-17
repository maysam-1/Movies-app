import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function AddMovie(){
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [img, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const[movie,setMovie]=useState({})
    return(
        <div>  
        <input placeholder="enter movie id" onChange={(e)=>{setId(e.target.value)}}/>
        <input placeholder="enter movie title" onChange={(e)=>{setTitle(e.target.value)}}/>
        <input placeholder="enter movie img url" onChange={(e)=>{setImgUrl(e.target.value)}}/>
        <input placeholder="enter movie description" onChange={(e)=>{setDescription(e.target.value)}}/>
        <input placeholder="enter movie category" onChange={(e)=>{setCategory(e.target.value)}}/>
        <input placeholder="enter movie year" onChange={(e)=>{setYear(e.target.value)}}/>

        <button onClick={()=>{
            setMovie({id,title,year,category,description,img})
            add();
        }}>Add Movie</button>
        </div>)
    
    async function add(){
        try{
        await axios.post(`http://localhost:5000/movies`,movie)
        }
        catch(err){
            console.log(err)
        }
    }

}

export default AddMovie;