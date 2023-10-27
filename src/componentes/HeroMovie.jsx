export default function HeroMovie({movie,loading}){

    return(
        <> 
            {
                loading ? <p style={{color:'white'}}>cargando</p> :
                Object.keys(movie).length > 0 ? (
                    <main className='hero'>
                    {<img className='backdrop' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" /> }
                    <div className='h2'>
                    <h2>{movie.original_title}</h2>
                    <p>{movie.overview}</p>
                        <div className='spams'>
                        <span>{movie.release_date}</span>
                        <span>Average Votes: {movie.vote_average} </span>
                        </div>
                    </div>
                    </main>
                ) : <p>no hay datos</p>
            }
        </>
    );
}