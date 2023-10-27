export default function Modal({selectedMovie,closeModal}){
    return(
        <div className="modal-background">
            <div className={`modal ${selectedMovie ? 'active' : ''}`}>
                <div className="modal-content">
                    <span className="close-button" onClick={closeModal}>X</span>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
                         alt=""
                    />
                    <div className="modal-desc">
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}