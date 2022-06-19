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

Categories.protoTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
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
