import id from 'date-fns/locale/id/index.js';
import React, { useCallback, useEffect, useState } from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { data } from './data/data';
import { addMovie } from './utils/addMovie';
import { editMovie } from './utils/editMovie';
import { setMovieStateForm } from './utils/setMovieStateForm';
import { showMoviesCategories } from './utils/showMoviesCategories';

const initialStateMovie = {
  id: null,
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
  const [tabValue, setTabValue] = useState('1');
  const [movie, setMovie] = useState(initialStateMovie);
  const [releaseDate, setReleaseDate] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [movies, setMovies] = useState(showMoviesCategories(tabValue, data));

  const handleTabs = useCallback((event, newTabValue) => {
    setTabValue(newTabValue);
    setMovies(showMoviesCategories(newTabValue, data));
  }, []);

  useEffect(() => {
    if (movieId) {
      const {
        id,
        genres,
        overview,
        poster_path,
        revenue,
        release_date,
        vote_count,
        title
      } = setMovieStateForm(movieId, movies, isEdit)
      setMovie({ ...movie, genres, id, overview,poster_path, revenue, vote_count, title })
      setReleaseDate(release_date);
    }
  }, [movieId, setMovie, isEdit]);

  const handleReset = () => {
    setMovie(initialStateMovie)
    setReleaseDate(null)
  }

  const handleReleaseDate = (newDate) => {
    if (newDate) {
      setReleaseDate(newDate);
    }
  }
  
  const handleOpen = useCallback(() => {
    setOpen(true);
    if (!id) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }, []);

  const handleClose =  useCallback(() => {
    setOpen(false);
    setIsDeleted(false);
    setIsSuccessful(false);
    handleReset();
  }, []);

  console.log('movies 00', movies);
  const handleDelete = useCallback((id) => {
    console.log('movies', movies);
    const deletedMovie = movies.filter((m) => m.id !== id);
    console.log(deletedMovie);
    // setMovies(deletedMovie);
    handleClose();
  }, [])

  const handleSubmit = (movie) => {
    if (isEdit) {
      setMovies(editMovie(movie, movies));
      setIsEdit(false);
    } else {
      const id = Math.floor(Math.random() * 10000)
      setMovies(addMovie({...movie, id }, movies));
    }
    handleReset();
    handleClose();
    setIsSuccessful(true);
  }

  const mainProps = {
    handleClose,
    handleDelete,
    handleOpen,
    handleReleaseDate,
    handleReset,
    handleSubmit,
    handleTabs,
    isDeleted,
    isSuccessful,
    movie,
    movieId,
    movies,
    open,
    releaseDate,
    setIsDeleted,
    setMovie,
    setMovieId,
    tabValue,
  }

  return (
    <>
      <Header handleOpen={handleOpen} />
      <Main {...mainProps} />
      <Footer />
    </>
  )
};
