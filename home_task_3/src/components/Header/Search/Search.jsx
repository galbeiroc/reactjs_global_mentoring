import React from 'react';
import { Button, TextField } from '@mui/material';

import './Search.scss'

export const Search = () => {
  return (
    <div className='contentSearch'>
      <TextField
        placeholder='What do you want to watch?'
        variant="outlined"
        sx={{
          backgroundColor: 'rgba(50, 50, 50, 0.8)',
          borderRadius: '4px',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '20px',
          fontWeight: 500,
          height: '55px',
          width: '713px',
          '& .MuiOutlinedInput-root': {
            color: 'white',
          }
        }}
      />
      <Button
        variant='contained'
        sx={{
          backgroundColor: '#F65242',
          borderRadius: '4px',
          color: 'white',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '20px',
          fontWeight: 500,
          height: '57px',
          marginLeft: '15px',
          width: '233px'
        }}
      >
        SEARCH
      </Button>
    </div>
  )
}
