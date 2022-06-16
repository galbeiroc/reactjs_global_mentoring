import React from 'react';
import { Button, TextField } from '@mui/material';

import './Search.scss'

export const Search = () => {
  return (
    <div className='content-search'>
      <TextField
        placeholder='What do you want to watch?'
        variant="outlined"
      />
      <Button className='btn-search' variant='contained'>
        search
      </Button>
    </div>
  )
}
