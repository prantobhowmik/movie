"use client"
import Image from 'next/image'
import { useState } from 'react'
import { BASE_URL } from './constants/page'
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

  
  return (
    <div className='flex items-center justify-center min-h-screen bg-light_bg'>
      <main className='items-center justify-between'>
        <h1 className='text-2xl font-foldit font-bold'>Explore Movies</h1>
        <form onClick={handleSearch}>
          <input type='text' 
          value={query} 
          onChange={(e)=>setQuery(e.target.value)}
          placeholder='search'
          className='bg-light_color text-center rounded-full hover:bg-bw_color outline-none placeholder:text-center'/>
          <button type="submit" className='bg-light_color'>Explore</button>
        </form>
        <Movies movies={movies} handleMovie={() => null}/>
      </main>
    </div>
  )
}
