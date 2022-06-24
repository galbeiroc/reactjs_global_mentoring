import React, { useCallback, useEffect, useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { Categories } from './Categories/Categories';

import { data } from '../../../data/data';

export const Content = ({ tabValue }) => {
  const [movies, setMovies] = useState([]);

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
        <Categories tabValue={tabValue} movies={movies} />
      </TabPanel>
    </TabContext>
  )
}

Content.propTypes = {
  tabValue: PropTypes.string.isRequired
}