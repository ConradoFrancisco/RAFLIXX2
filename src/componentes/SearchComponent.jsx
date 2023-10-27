import { useState,useEffect } from "react";
import { returnFetch } from "../helpers/fetch";
import { options } from "../helpers/optionsfetch";
import { useMovies } from "../customHooks/useMovies";
export default function SearchComponent(){

    const [genres,SetGenres] = useState({})
    const [selectedGenre,setselectedGenre] = useState('');
    const {setAllmovies} = useMovies();

    const changeMovieGenre = (e) =>{
        setselectedGenre(e.target.value)
        console.log(e.target.value)
    }

    useEffect(()=>{
        const getGenres = () =>{
            returnFetch('https://api.themoviedb.org/3/genre/movie/list?language=en',options)
            .then(response => {
                SetGenres(response.genres)
                
            })
        }
        getGenres();
    },[])

    useEffect(()=>{
        const updateMovies = () =>{
            returnFetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,options)
            .then(response => {
                console.log(response)
                setAllmovies(response.results)
            })
        }
        updateMovies()
    },[selectedGenre])
    return(
        <>
            <div>
                
                <select value={selectedGenre} onChange={changeMovieGenre} name="" id="">
                {
                    genres.length > 0 ? (genres.map((genre,key)=>{
                        return (
                            <option value={genre.name}>{genre.name}</option>
                        )
                    })) : "asd"
                }
                </select>
            </div>
        </>
    );
}