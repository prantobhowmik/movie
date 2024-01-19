"use client"
import Image from 'next/image'
import { useState } from 'react'
import { BASE_URL } from './constants/Baseurl'
import Movies from './components/Movies'

async function searchMovies(query) {
  try{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(query)}`)
    return await response.json();

  }catch(error){
    console.error("Error", error)
    return []
  }
}

export default function Home() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  async function handleSearch(e){
    e.preventDefault();
    if (!query) return;
    const results = await searchMovies(query);
    setMovies(results.results)
  }

  console.log({movies})
  return (
    <div className='flex flex-wrap items-center justify-center min-h-screen bg-light_bg'>
      
        <main className='items-center justify-center'>
        <h1 className='text-2xl text-center font-bold'>eXplore</h1>
        <form onChange={handleSearch}>
          <input type='text' 
          value={query} 
          onChange={(e)=>setQuery(e.target.value)}
          placeholder='search'
          className='bg-light_color text-center rounded-full hover:bg-bw_color outline-none placeholder:text-center'/>
          
        </form>
        
        </main>
      
      <div className='flex flex-wrap p-2 gap-x-4 gap-y-4 items-center justify-between '>
        {
            movies.map((movie)=>{
                return(
                    // eslint-disable-next-line react/jsx-key
                    <Movies movie = {movie} />
                )
            })
        }
      </div>
    </div>
  )
}
