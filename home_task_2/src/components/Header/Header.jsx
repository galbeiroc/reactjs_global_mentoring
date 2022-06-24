import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Logo } from './Logo/Logo';
import PropTypes from 'prop-types';

import { Search } from './Search/Search';
import './Header.scss';

export const Header = ({ handleOpen }) => {
  return (
    <header>
      <div className="layer">
        <div className='topHeader'>
          <Logo />
          <Button
            variant='contained'
            sx={{
              backgroundColor: 'rgba(96, 96, 96, 0.68)',
              borderRadius: '4px',
              color: '#F65242',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '16px',
              width: '177px'
            }}
            onClick={handleOpen}
          >
            <AddIcon />ADD MORE
          </Button>
        </div>
        <h3 className='title'>
            find your movie
        </h3>
        <Search />
      </div>
    </header>
  )
}

Header.propTypes = {
  handleOpen: PropTypes.func.isRequired
};
