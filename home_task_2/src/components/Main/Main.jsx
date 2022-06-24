import React, { useCallback, useState } from 'react';

import { Nav } from './Nav/Nav';
import { Content } from './Content/Content';

import './Main.scss';

export const Main = () => {
  const [tabValue, setTabValue] = useState('1');

  const handleChange = useCallback((event, newTabValue) => {
    setTabValue(newTabValue);
  }, []);

  return (
    <main>
      <Nav tabValue={tabValue} handleChange={handleChange} />
      <Content tabValue={tabValue} />
    </main>
  )
}
