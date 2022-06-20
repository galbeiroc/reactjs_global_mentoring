import { useCallback, useEffect, useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import PropTypes from 'prop-types';

import { Categories } from './Categories/Categories';

import allMovies from '../../../data/data.json';
import './Content.scss'
import { Typography } from '@mui/material';

export const Content = ({ tabValue }) => {
  const [movies, setMovies] = useState([]);

  const showMoviesCategories = useCallback((tabVal) => {
    switch (tabVal) {
      case '2':
        setMovies(allMovies.filter((movie) => movie.genres.includes('Fantasy')))
        break;
      case '3':
        setMovies(allMovies.filter((movie) => movie.genres.includes('Comedy')))
        break;
      case '4':
        setMovies(allMovies.filter((movie) => movie.genres.includes('Horror')))
        break;
      case '5':
        setMovies(allMovies.filter((movie) => movie.genres.includes('Action')))
        break;
      default:
        setMovies(allMovies)
        break;
    }
  }, [setMovies])

  useEffect(() => {
    showMoviesCategories(tabValue)
  }, [tabValue, showMoviesCategories]);

  return (
    <TabContext value={tabValue}>
      <Typography className='movies-found' variant='caption'>
        <b>{movies.length}</b> movies found
      </Typography>
      <TabPanel value={tabValue}>
        <Categories tabValue={tabValue} movies={movies} />
      </TabPanel>
    </TabContext>
  )
}

Content.propTypes = {
  tabValue: PropTypes.string.isRequired
}