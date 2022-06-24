import React from 'react';
import { Box, Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';

import { Sort } from '../Sort/Sort';

import './Nav.scss';

const tabs = {
  1: "ALL",
  2: "FANTASY",
  3: "COMEDY",
  4: "HORROR",
  5: "ACTION"
}

export const Nav = ({ tabValue, handleTabs }) => (
  <nav className='contentNav'>
    <TabContext value={tabValue}>
      <Box className='boxTabs'>
        <Tabs
          className='tabList'
          value={tabValue}
          onChange={handleTabs}
          sx={{
            '.MuiTabs-indicator': {
              backgroundColor: '#F65242'
            },
          }}
        >
          {
            Object.entries(tabs).map(([key, value], i) => (
              <Tab
                key={`${value}-${i}`}
                label={
                  <Typography
                    style={{
                      color: tabValue === key ? '#F65242' : 'white',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                    variant='subtitle1'
                  >
                    {value}
                  </Typography>
                }
                value={key}
              />
            ))
          }
        </Tabs>
        <Sort />
      </Box>
    </TabContext>
  </nav>
);

Nav.propTypes = {
  tabValue: PropTypes.string.isRequired,
  handleTabs: PropTypes.func.isRequired
}