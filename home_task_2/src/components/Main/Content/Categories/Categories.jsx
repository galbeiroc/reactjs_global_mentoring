import React from 'react';
import PropTypes from 'prop-types';

import { MovieCard } from '../../MovieCard/MovieCard';

export const Categories = ({ movies }) => (
  <>
    {
      movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))
    }
  </>
);

Categories.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      tagline: PropTypes.string,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      genres: PropTypes.array.isRequired,
      runtime: PropTypes.number
    })
  ).isRequired
};
