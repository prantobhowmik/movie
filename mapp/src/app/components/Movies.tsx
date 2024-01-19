
import Image from 'next/image'
import React from 'react'

const Movies = (movies : any) => {
    const imgUrl= `https://image.tmdb.org/t/p/w500${movies.movie.poster_path}`;
    const title = movies.movie.title;
    const overview= movies.movie.overview;
    const rating = movies.movie.vote_average;
    const totalReviews = movies.movie.vote_count;
    const release = movies.movie.release_date;
    const language = movies.movie.original_language;
  return(
    <div className='flex w-96 items-stretch p-2 gap-0 border-[1.5px] rounded-lg shadow-lg hover:bg-bw_color'>
    <div className='mr-4'>
      <Image 
        src={imgUrl}
        width={600}
        height={520} 
        alt={title}
        className='rounded-lg'
      />
    </div>
    <div>
      <h1 className='text-xl font-bold mb-2'>{title?.substring(0,15)}</h1>
      <p className='text-gray-600'>{overview?.substring(0,75)+'...'}</p>
      <div className='flex items-center'>
      <span className='text-yellow-500 text-lg font-bold mr-1'>Review: {rating}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-5 w-5 text-yellow-500'>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
      </svg>
    </div>
    <p className='text-gray-500'>Release: {release}</p>
    <p className='flex items-center text-gray-500'>
      Language: 
      <span className='ml-1 bg-dark_color text-white py-1 px-2 rounded-full text-sm'>{language}</span>
    </p>
    <div className='flex items-center'>
      <span className='text-blue-500 text-lg font-bold mr-1'>{totalReviews}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-5 w-5 text-blue-500'>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12c0-2.39 1.18-4.47 3-6 1.77-1.53 4.25-2.41 7-2.41s5.23.88 7 2.41c1.82 1.53 3 3.61 3 6s-1.18 4.47-3 6c-1.77 1.53-4.25 2.41-7 2.41s-5.23-.88-7-2.41C4.18 16.47 3 14.39 3 12zm9 2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
      </svg>
    </div>
    </div>
  </div>
  


  )
}
export default Movies