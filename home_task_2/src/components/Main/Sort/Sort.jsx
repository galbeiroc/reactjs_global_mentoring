import React, { useState } from 'react';
import { Box, MenuItem, Select, Typography } from '@mui/material';

import './Sort.scss'

export const Sort = () => {
  const [sortBy, setSortBy] = useState(10);

  const onChange = ({ target: { value }}) => {
    setSortBy(value)
  }

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
        onChange={onChange}
      >
        <MenuItem value={10}>release date</MenuItem>
        <MenuItem value={20}>old date</MenuItem>
        <MenuItem value={30}>sort by A-Z</MenuItem>
      </Select>
    </Box>
  )
}
