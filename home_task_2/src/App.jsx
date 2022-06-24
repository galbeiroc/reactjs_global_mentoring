import React, { useState } from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export default function App() {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header handleOpen={handleOpen} />
      <Main handleClose={handleClose} open={open} />
      <Footer />
    </>
  )
};
