import { useState } from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import './Nav.scss'

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
            <Tab label="ALL" value="1"/>
            <Tab label="DOCUMENTARY" value="2" />
            <Tab label="COMEDY" value="3" />
            <Tab label="HORROR" value="4" />
            <Tab label="CRIME" value="5" />
          </TabList>
          <Box className='sort'>
            <span>SORT BY</span>
          </Box>
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
