import { useState,useEffect } from "react"
import { returnFetch } from "../helpers/fetch"
import { options } from "../helpers/optionsfetch"
export const useMovies = () => {
    const [movie,setMovie] = useState([])
    const [loading,setLoading] = useState(false)
    const [allMovies,setAllmovies] = useState([])
    
    useEffect(()=>{
  
      const getMovies = () =>{
        setLoading(true);
        returnFetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',options)
        .then(response => {setMovie(response.results[0])
          response.results.shift()
          setAllmovies(response.results) 
          console.log(response)
          setLoading(false)})

      }
      getMovies();
    
   },[])
   return {movie,allMovies,loading,setAllmovies}
  }