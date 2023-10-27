
import './App.css'
import { pelis } from '../Static/json'
import Navbar from './componentes/Navbar'
import { useMovies } from './customHooks/useMovies';
import HeroMovie from './componentes/HeroMovie';
import MovieCards from './componentes/MovieCards';


function App() {
  
const {movie,allMovies,loading} = useMovies();
 
 return(
    <>
      <Navbar/>
      <HeroMovie movie={movie} loading={loading} />
      <MovieCards allMovies={allMovies}/>
    </>
  )
 
}

export default App

    
  