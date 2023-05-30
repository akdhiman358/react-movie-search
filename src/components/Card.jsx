import React from 'react'

function Card({item}) {
    console.log(item)
  return (
    <div className='card'>
        <img className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
          alt={item.title + ' poster'}
        />
        <h2 className='card-title'>{item.original_title}</h2>
        <p><small>RELEASE DATE: <span className='gray'>{item.release_date}</span></small></p>
        <p><small>RATING: <span className='gray'>{item.vote_average}</span></small></p>
        <p>{item.overview}</p>
    </div>
  )
}

export default Card