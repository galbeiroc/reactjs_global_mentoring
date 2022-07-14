import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Typography } from '@mui/material';

const SuccessfulMsg = () => {
  return (
    <>
      <CheckCircleRoundedIcon sx={{ height: '80px', width: '80px'}} />
        <Typography
          sx={{
            color: 'white',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '40px',
            textTransform: 'uppercase'
          }}
        >
          congratulations !
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '20px',
            textAlign: 'center',
            width: '350px'
          }}
        >
          The movie has been added to 
          database successfully 
        </Typography>
    </>
  )
}

export default SuccessfulMsg;
