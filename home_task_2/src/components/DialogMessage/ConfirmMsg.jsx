import React from 'react';
import { Button, Typography } from '@mui/material';

import PropTypes from 'prop-types';

const ConfirmMsg = ({ handleDelete, movieId }) => {
  return (
    <>
      <Typography
        sx={{
          color: 'white',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '40px',
          textTransform: 'uppercase'
        }}
      >
        Delete movie
      </Typography>
      <Typography
          sx={{
            color: 'white',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '20px',
            marginTop: 5,
            textAlign: 'left',
          }}
        >
          Are you sure you want to delete this movie? 
        </Typography>
        <Button
          autoFocus
          onClick={() => handleDelete(movieId)}
          variant='contained'
          sx={{
            alignSelf: 'end',
            backgroundColor: '#F65242',
            fontFamily: "'Montserrat', sans-serif",
            marginTop: '80px',
            padding: "10px",
            width: '180px'
          }}
        >
          CONFIRM
        </Button>
    </>
  )
}

ConfirmMsg.propTypes = {
  handleDelete: PropTypes.func,
  movieId: PropTypes.number
}

export default ConfirmMsg;
