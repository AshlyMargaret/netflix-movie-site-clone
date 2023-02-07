import React from 'react'
import './Row.css'
import axios from '../../Constants/axios'
import {api_Key, image_Url } from '../../Constants/Constants'
import { useState,useEffect } from 'react';
import YouTube from 'react-youtube';






function Row(props) {

    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]= useState("")

    

    useEffect(() => {
       axios.get(props.url).then((response)=>{ 
        setMovies(response.data.results)
        console.log("movies",movies);
       }).catch((error)=>{
        console.log("error",error);
       })
    }, [])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
 
    const handleMovieTrailer = (id)=>{
      console.log("ID:",id);
      axios.get(`movie/${id}/videos?api_key=${api_Key}&language=en-US`).then(response=>{
        if(response.data.results.length!==0 ){
           setUrlId(response.data.results[0])
        }else{
           console.log("Trailer not available");
        }
      })
    }

  return (
    <div className='row'>
        <div className="rowTitle">
        <h2 className='titleCatagory'>{props.title}</h2>
       </div>   
       <div className="rowMovieImages">   
       {
         movies.map((movieObj)=>{     
          return(
         
            <img  onClick={()=>{
              handleMovieTrailer(movieObj.id)
            }} className= {props.isSmall ? 'small_poster': 'poster' } src={`${image_Url+movieObj.backdrop_path}`} alt="movie" />
           
          )         
         })
       }
       </div>
       {
              urlId && <YouTube videoId={urlId.key} opts={opts} /> 
            }
    </div>
  )
}

export default Row