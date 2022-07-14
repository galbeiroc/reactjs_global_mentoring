import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Nav } from './Nav/Nav';
import { Content } from './Content/Content';

import './Main.scss';

export const Main = ({ handleClose, handleOpen, open }) => {
  const [tabValue, setTabValue] = useState('1');

  const handleTabs = useCallback((event, newTabValue) => {
    setTabValue(newTabValue);
  }, []);

  return (
    <main>
      <Nav tabValue={tabValue} handleTabs={handleTabs} />
      <Content handleClose={handleClose} handleOpen={handleOpen} open={open} tabValue={tabValue} />
    </main>
  )
}

Main.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
