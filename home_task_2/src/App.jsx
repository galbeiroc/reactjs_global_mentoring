import React, { useEffect, useState } from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { data } from './data/data';
import { setMovieStateForm } from './utils/setMovieStateForm';

const initialStateMovie = {
  genres: [],
  overview: '',
  poster_path: '',
  revenue: undefined,
  vote_count: undefined,
  title: '',
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [movie, setMovie] = useState(initialStateMovie);
  const [releaseDate, setReleaseDate] = useState(null);

  useEffect(() => {
    if (movieId) {
      const {
        genres,
        overview,
        poster_path,
        revenue,
        release_date,
        vote_count,
        title
      } = setMovieStateForm(movieId, data)
      setMovie({ ...movie, genres, overview,poster_path, revenue, vote_count, title })
      setReleaseDate(release_date);
    }
  }, [movieId, setMovie]);

  const handleReset = () => {
    setMovie(initialStateMovie)
    setReleaseDate(null)
  }

  const handleReleaseDate = (newDate) => {
    if (newDate) {
      setReleaseDate(newDate);
    }
  }
  
  const handleOpen = (id) => {
    setOpen(true);
    setMovieId(id);
  };

  const handleClose = () => {
    setOpen(false);
    handleReset();
  };

  const handleSubmit = () => {
    handleReset();
    handleClose();
  }

  return (
    <>
      <Header handleOpen={handleOpen} />
      <Main
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleReleaseDate={handleReleaseDate}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        movie={movie}
        open={open}
        releaseDate={releaseDate}
        setMovie={setMovie}
      />
      <Footer />
    </>
  )
};
