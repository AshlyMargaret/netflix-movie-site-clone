import React from 'react'
import './Row.css'
import axios from '../../Constants/axios'
import {image_Url } from '../../Constants/Constants'
import { useState,useEffect } from 'react';





function Row(props) {

    const [movies, setMovies] = useState([])
    

    useEffect(() => {
       axios.get(props.url).then((response)=>{ 
        setMovies(response.data.results)
        console.log("movies",movies);
       }).catch((error)=>{
        console.log("error",error);
       })
    }, [])


 

  return (
    <div className='row'>
        <div className="rowTitle">
        <h2 className='titleCatagory'>{props.title}</h2>
       </div>   
       <div className="rowMovieImages">   
       {
         movies.map((movieObj)=>{     
          return(
         
            <img  className= {props.isSmall ? 'small_poster': 'poster' } src={`${image_Url+movieObj.backdrop_path}`} alt="movie" />
           
          )         
         })
       }
       </div>
     
    </div>
  )
}

export default Row