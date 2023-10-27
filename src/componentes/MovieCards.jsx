import { useState,useEffect } from "react";
import Modal from "./Modal";
import { returnFetch } from "../helpers/fetch";
import { options } from "../helpers/optionsfetch";
import SearchComponent from './SearchComponent';
import { useMovies } from "../customHooks/useMovies";
export default function MovieCards({ allMovies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    

    const handleMovieClick = (peli) => {
        setSelectedMovie(peli);
    }

    const closeModal = () => {
        setSelectedMovie(null);
      }

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
    return (
        <>
            <section>
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

                <div className='movies'>
                    {allMovies.length > 0 ? (
                        allMovies.map((peli, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`movie-container ${selectedMovie === peli ? 'hovered' : ''}`}
                                    onClick={()=>{handleMovieClick(peli)}}     
                                >
                                    <img
                                        className="poster-path"
                                        src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                                        alt=""
                                    />
                                    
                                </div>
                            );
                        })
                    ) : "asd"}
                </div>
            </section>
            {selectedMovie && <Modal closeModal={closeModal} selectedMovie={selectedMovie}/>}
        </>
    );
}
