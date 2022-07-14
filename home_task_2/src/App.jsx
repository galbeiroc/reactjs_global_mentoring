import React, { useState } from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export default function App() {
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState(null);
  
  const handleOpen = (id) => {
    setOpen(true);
    setMovieId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header handleOpen={handleOpen} />
      <Main
        handleClose={handleClose}
        handleOpen={handleOpen}
        movieId={movieId}
        open={open}
      />
      <Footer />
    </>
  )
};
