import React, { useCallback, useEffect, useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { Categories } from './Categories/Categories';
import { MovieForm } from '../../MovieForm/MovieForm';

import { data } from '../../../data/data';
import { setMovieStateForm } from '../../../utils/setMovieStateForm';

export const Content = ({ handleClose, handleOpen, movieId, open, tabValue }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({
    genres: [],
    overview: '',
    poster_path: '',
    revenue: '',
    vote_count: '',
    title: '',
  });
  const [releaseDate, setReleaseDate] = useState(null);

  const showMoviesCategories = useCallback((tabVal) => {
    switch (tabVal) {
      case '2':
        setMovies(Object.values(data).filter((movie) => movie.genres.includes('Fantasy')))
        break;
      case '3':
        setMovies(Object.values(data).filter((movie) => movie.genres.includes('Comedy')))
        break;
      case '4':
        setMovies(Object.values(data).filter((movie) => movie.genres.includes('Horror')))
        break;
      case '5':
        setMovies(Object.values(data).filter((movie) => movie.genres.includes('Action')))
        break;
      default:
        setMovies(Object.values(data).map((movie) => movie))
        break;
    }
  }, [setMovies])

  useEffect(() => {
    showMoviesCategories(tabValue)
  }, [tabValue, showMoviesCategories]);

  useEffect(() => {
    if (movieId) {
      const {
        genres,
        overview,
        poster_path,
        revenue,
        release_date,
        vote_count,
        title
      } = setMovieStateForm(movieId, data)
      setMovie({ ...movie, genres, overview,poster_path, revenue, vote_count, title })
      setReleaseDate(release_date)
    }
  }, [movieId, setMovie]);

  const hadleChange = useCallback((event) => {
    const {
      target: { value, name },
    } = event;
    if (name === 'genres') {
      setMovie({
        ...movie, [name]: typeof value === 'string' ? value.split(',') : value,
    });
    } else {
      setMovie({
        ...movie, [name]: value
      })
    }
    
  }, [setMovie, movie]);

  return (
    <TabContext value={tabValue}>
      <Typography 
        variant='caption'
        sx={{
          color: 'white',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '24px',
          marginLeft: '60px',
          paddingTop: '20px',
        }}
      >
        <b>{movies.length}</b> movies found
      </Typography>
      <TabPanel
        value={tabValue}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '50px',
          padding: '24px 60px'
        }}
      >
        <Categories handleOpen={handleOpen} tabValue={tabValue} movies={movies} />
      </TabPanel>
      <MovieForm
        handleClose={handleClose}
        handleChange={hadleChange}
        movie={movie}
        open={open}
        releaseDate={releaseDate}
        setReleaseDate={setReleaseDate}
      />
    </TabContext>
  )
}

Content.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  movieId: PropTypes.number,
  open: PropTypes.bool.isRequired,
  tabValue: PropTypes.string.isRequired
}