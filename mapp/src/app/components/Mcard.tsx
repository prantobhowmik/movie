"use client"
import Image from "next/image";

export default function Mcard({movie, onClick}){
    const imgUrl= `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const title = movie.title.length > 25 ? movie.title.substring(0,25) + '...' : movie.title;
    return(
        <div onClick={onClick}>
            <div className="relative w-64 h-96">
                <Image 
                src = {imgUrl}
                alt = {title}
                layout = 'responsive'
                width = {128}
                height = {192}
                objectFit = 'cover'
                className= "rounded-md"
                />
            </div>
            <h3 className="text-white text-lg">{title}</h3>
        </div>
    )
}
