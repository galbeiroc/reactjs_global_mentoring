import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Logo } from './Logo/Logo';

import './Header.scss'
import { Search } from './Search/Search';

export const Header = () => {
  return (
    <header>
      <div className="layer">
        <div className='top-header'>
          <Logo />
          <Button className='btn-add' variant='contained'>
            <AddIcon />add More
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
