import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MoviesListShape } from './MoviesListShape';

export const MoviesList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </ul>
);

MoviesList.propTypes = MoviesListShape;
