import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Nav } from './Nav/Nav';
import { Content } from './Content/Content';

import './Main.scss';

export const Main = ({
  handleClose,
  handleOpen,
  handleReleaseDate,
  handleReset,
  handleSubmit,
  handleTabs,
  isDeleted,
  isSuccessful,
  movies,
  movie,
  open,
  releaseDate,
  setIsDeleted,
  setMovie,
  tabValue
}) => {
  return (
    <main>
      <Nav tabValue={tabValue} handleTabs={handleTabs} />
      <Content
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleReleaseDate={handleReleaseDate}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        isDeleted={isDeleted}
        isSuccessful={isSuccessful}
        movies={movies}
        movie={movie}
        open={open}
        releaseDate={releaseDate}
        setIsDeleted={setIsDeleted}
        setMovie={setMovie}
        tabValue={tabValue}
      />
    </main>
  )
}

Main.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleReleaseDate: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTabs: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool,
  isSuccessful: PropTypes.bool,
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
  open: PropTypes.bool.isRequired,
  releaseDate: PropTypes.string,
  setIsDeleted: PropTypes.func,
  setMovie: PropTypes.func.isRequired,
  tabValue: PropTypes.string.isRequired
};
