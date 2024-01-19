"use client"
import React from 'react'
import Image from 'next/image'

export default function MovieCard({movie, onClick}){
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const title = movie.title.lengh > 25? movie.title.substring(0,25)+'...': movie.title;
    
  return (
    <div onClick={onClick}>
        <div>
            <Image 
            src={imgUrl}
            alt={title}
            layout= "responsive"
            width={128}
            height={192}
            objectFit="cover"
            className= "rounded-md"
            />
        </div>
        <h2>{title}</h2>
    </div>
  )
}
