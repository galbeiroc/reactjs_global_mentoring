import { Box, Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import PropTypes from 'prop-types';

import { Sort } from '../Sort/Sort';

import './Nav.scss';

export const Nav = ({ tabValue, handleChange }) => (
  <nav className='content-nav'>
    <TabContext value={tabValue}>
      <Box className='box-tabs'>
        <TabList className='tab-list' value={tabValue} onChange={handleChange}>
          <Tab label={<Typography className='text-tab' variant='subtitle1'>ALL</Typography>} value="1"/>
          <Tab label={<Typography className='text-tab' variant='subtitle1'>FANTASY</Typography>} value="2" />
          <Tab label={<Typography className='text-tab' variant='subtitle1'>COMEDY</Typography>} value="3" />
          <Tab label={<Typography className='text-tab' variant='subtitle1'>HORROR</Typography>} value="4" />
          <Tab label={<Typography className='text-tab' variant='subtitle1'>ACTION</Typography>} value="5" />
        </TabList>
        <Sort />
      </Box>
    </TabContext>
  </nav>
);

Nav.propTypes = {
  tabValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}