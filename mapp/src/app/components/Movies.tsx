import Mcard from "./Mcard";
export default function({movies, handleMovie}){
    if(!movies.lengh) return null;
    return(
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                movies.map((movie) => (
                    <Mcard key={movie.id} movie={movie} onClick={handleMovie}/>
                ))
            }
        </div>
    )
}