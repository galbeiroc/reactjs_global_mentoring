import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from './Nav/Nav';
import { Content } from './Content/Content';

import './Main.scss';

export const Main = ({
  handleClose,
  handleDelete,
  handleOpen,
  handleReleaseDate,
  handleReset,
  handleSubmit,
  handleTabs,
  isDeleted,
  isSuccessful,
  movie,
  movieId,
  movies,
  open,
  releaseDate,
  setIsDeleted,
  setMovie,
  setMovieId,
  tabValue
}) => {
  return (
    <main>
      <Nav tabValue={tabValue} handleTabs={handleTabs} />
      <Content
        handleClose={handleClose}
        handleDelete={handleDelete}
        handleOpen={handleOpen}
        handleReleaseDate={handleReleaseDate}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        isDeleted={isDeleted}
        isSuccessful={isSuccessful}
        movie={movie}
        movieId={movieId}
        movies={movies}
        open={open}
        releaseDate={releaseDate}
        setIsDeleted={setIsDeleted}
        setMovie={setMovie}
        setMovieId={setMovieId}
        tabValue={tabValue}
      />
    </main>
  )
}

Main.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  handleOpen: PropTypes.func.isRequired,
  handleReleaseDate: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTabs: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool,
  isSuccessful: PropTypes.bool,
  movie: PropTypes.shape({
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
  }).isRequired,
  movieId: PropTypes.number,
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
  ).isRequired,
  open: PropTypes.bool.isRequired,
  releaseDate: PropTypes.string,
  setIsDeleted: PropTypes.func,
  setMovie: PropTypes.func.isRequired,
  setMovieId: PropTypes.func,
  tabValue: PropTypes.string.isRequired
};
