import React from 'react'
import './BannerSec.css'
import { useState, useEffect } from 'react'
import axios from '../../Constants/axios'
import { api_Key,image_Url } from '../../Constants/Constants'
import N from '../../Assests/n-removebg-preview.png'

function BannerSec() {

  const [movie, setMovie] = useState()
  const [moreInfo , setMoreInfo] = useState(false)

  useEffect(() => {
    axios.get(`trending/all/day?api_key=${api_Key}`).then((response)=>{
      var num = Math.floor(Math.random() * response.data.results.length);   // here this method generate random array index number for dynamically display or load movie details.
      setMovie(response.data.results[num])
      console.log("banner",response.data.results[num]);
    })
  }, [])

  return (
    <div className='banner'style={{backgroundImage:`url(${movie ? image_Url+movie.backdrop_path : ""})`}}>

       <div className="banner_content">
        <div className="content_heading">
            <h1 className='movie_name'>{movie ? movie.title : ""}</h1>
            <div className="mediaType">
             <img src={N} alt="N" />
            <p>{movie ? movie.media_type : ""}</p>
           </div>  
        </div> 
          
        <div className="content_btn_sec">
            <button className='play_btn'><i class="fa-solid fa-play"></i> <span>Play</span> </button>
            <button onClick={()=>{
              setMoreInfo(!moreInfo)
            }} className='more_btn'><i class="fa fa-info-circle" aria-hidden="true"></i> <span> More Info</span></button>
        </div>
        <div className="content_desc">
            <p>{movie ? movie.overview : ""}
            </p>
        </div>
       </div>
       <div className="fade_bottom"></div>

     {
       moreInfo ? <div className="moreInfoSection">
        <div className="closeButton">
        <i onClick={()=>{
          setMoreInfo(false)
        }}  className='closeBtnIcon' class="fas fa-window-close"></i>
        </div>
        <img className='posterPathImage' src={movie ? image_Url+movie.poster_path : ""} alt="" />
        <h3> {movie  ?  movie.title:        null}   </h3>
        <p> Relase Date : {movie  ?  movie.release_date: null}   </p>
        <p> Popularity  : {movie  ?  movie.popularity:   null}   </p>
        <p> OverView    : {movie  ?  movie.overview:     null}   </p>  
     </div> : null
     }

    </div>
  )
}

export default BannerSec