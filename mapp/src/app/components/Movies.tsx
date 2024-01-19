
import Image from 'next/image'
import React from 'react'

const Movies = (movies) => {
    const imgUrl= `https://image.tmdb.org/t/p/w500${movies.movie.poster_path}`;
    const title = movies.movie.title.length > 25 ? movies.movie.title.substring(0,25) + '...' : movies.movie.title;
  return(
            <div className='flex'>
        <div className='flex w-max items-stretch p-4 '>
            <Image 
            src={imgUrl}
            width={180}
            height={200} 
            alt={title}
            />
            <h3>{title}</h3>
        </div>
        {/* Add more items as needed */}
        </div>


  )
}
export default Movies