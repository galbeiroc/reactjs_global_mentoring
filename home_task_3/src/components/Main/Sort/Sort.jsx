import React, { useState } from 'react';
import { Box, MenuItem, Select, Typography } from '@mui/material';

import './Sort.scss'

export const Sort = () => {
  const [sortBy, setSortBy] = useState(10);

  const onChange = ({ target: { value }}) => {
    setSortBy(value)
  }

  return (
    <Box className='sort-content'>
      <Typography className='sort-text' variant='subtitle1'>
        SORT BY
      </Typography>
      <Select
        className='sort-select'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortBy}
        size='small'
        onChange={onChange}
      >
        <MenuItem value={10}>release date</MenuItem>
        <MenuItem value={20}>old date</MenuItem>
        <MenuItem value={30}>sort by A-Z</MenuItem>
      </Select>
    </Box>
  )
}
