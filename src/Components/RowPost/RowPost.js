import React from 'react'
import Movie from '../../Assests/lucifer.jpeg'
import './RowPost.css'

function RowPost() {
  return (
    <div className='rowPost'>
       <div className="rowTitle">
        <h2 className='titleCatagory'>Title</h2>
       </div>
       <div className="rowMovieImages">
        <img src={Movie} alt="movie" />
        <img src={Movie} alt="movie" />
        <img src={Movie} alt="movie" />
        <img src={Movie} alt="movie" />
        <img src={Movie} alt="movie" />
        <img src={Movie} alt="movie" />
        <img src={Movie} alt="movie" />
        <img src={Movie} alt="movie" />
       </div>
    </div>
  )
}

export default RowPost