import { useState } from 'react';
import { Box, Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Sort } from '../Sort/Sort';

import './Nav.scss';

export const Nav = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <TabContext value={value}>
        <Box className='box-tabs'>
          <TabList className='tab-list' value={value} onChange={handleChange}>
            <Tab label={<Typography className='text-tab' variant='subtitle1'>ALL</Typography>} value="1"/>
            <Tab label={<Typography className='text-tab' variant='subtitle1'>DOCUMENTARY</Typography>} value="2" />
            <Tab label={<Typography className='text-tab' variant='subtitle1'>COMEDY</Typography>} value="3" />
            <Tab label={<Typography className='text-tab' variant='subtitle1'>HORROR</Typography>} value="4" />
            <Tab label={<Typography className='text-tab' variant='subtitle1'>CRIME</Typography>} value="5" />
          </TabList>
          <Sort />
        </Box>
        <TabPanel value="1">All</TabPanel>
        <TabPanel value="2">DOCUMENTARY</TabPanel>
        <TabPanel value="3">COMEDY</TabPanel>
        <TabPanel value="4">HORROR</TabPanel>
        <TabPanel value="5">CRIME</TabPanel>
      </TabContext>
    </nav>
  )
}
