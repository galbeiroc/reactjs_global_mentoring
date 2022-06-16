import React from 'react';
import { Typography } from '@mui/material';

import './Logo.scss';

export const Logo = () => {
  return (
    <>
      <Typography variant='h6'>
        <span className='netflix'>netflix</span><span className='roulette'>roulette</span>
      </Typography>
    </>
  )
}
