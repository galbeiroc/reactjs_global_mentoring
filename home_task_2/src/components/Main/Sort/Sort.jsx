import React, { useState } from 'react';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import './Sort.scss'

export const Sort = ({ handleSortMovie, sortBy }) => {
  return (
    <Box className='sortContent'>
      <Typography
        variant='subtitle1'
        sx={{
          color: 'rgba(255, 255, 255, 0.68)',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '16px',
        }}
      >
        SORT BY
      </Typography>
      <Select
        value={sortBy}
        size='small'
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '16px',
          fontWeight: 500,
          textTransform: 'uppercase',
          width: 'fit-content'
        }}
        onChange={handleSortMovie}
      >
        <MenuItem value='release_date'>release date</MenuItem>
        <MenuItem value='old_date'>old date</MenuItem>
        <MenuItem value='sort_az'>sort by A-Z</MenuItem>
      </Select>
    </Box>
  )
}

Sort.propTypes = {
  handleSortMovie: PropTypes.func.isRequired,
  sortBy: PropTypes.string
}