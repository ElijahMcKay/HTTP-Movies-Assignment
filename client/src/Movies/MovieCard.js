import React, { createContext } from 'react';


export const MovieContext = createContext(); 

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;

  console.log(title); 
  return (
    <MovieContext.Provider value={props.movie}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </MovieContext.Provider>
  );
};

export default MovieCard;
