import React from 'react'

export default function SearchMovies() {
  return (
    <>
    
    <form className='form'>
      <label htmlFor="movie-name">Movie Name</label>
      <input type="text" id='movie-name' placeholder='e.g. Jurrasic Park'/>
      <button>Search</button>
    </form>
    
    </>
  )
}
