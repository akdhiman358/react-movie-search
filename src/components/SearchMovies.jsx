import React,{ useState } from 'react'
import Card from './Card'

export default function SearchMovies() {

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const searchMovies = async(e)=>{
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=6676a0703b037d65ef500b4195706f2a&query=${query}`
        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            console.log(data.results)
            setMovies(data.results)
        }catch(err){
          console.log(err)
        }
        setQuery('')

       
  }
  
  return (
    <>
    
    <form className='form' onSubmit={searchMovies}>
      <label htmlFor="movie-name">Movie Name</label>
      <input type="text" id='movie-name' placeholder='e.g. Jurassic park' name='query' value={query} onChange={(e)=>setQuery(e.target.value)}/>
      <button >Search</button>
    </form>
    <div className='card-list'>

    {
      movies.filter(item => {
        return item.original_language === "en"
        }).map(item=>(
          <Card item = {item} key={item.id}/>
                ))
    }

    </div>
    
    </>
  )
}
