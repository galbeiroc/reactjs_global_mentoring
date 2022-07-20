import React, { useCallback, useEffect, useState } from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { data } from './data/data';
import { addMovie } from './utils/addMovie';
import { editMovie } from './utils/editMovie';
import { setMovieStateForm } from './utils/setMovieStateForm';
import { showMoviesCategories } from './utils/showMoviesCategories';
import { sortMovies } from './utils/sortMovies';

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
  const [sortBy, setSortBy] = useState('release_date');
  const [releaseDate, setReleaseDate] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [movies, setMovies] = useState(showMoviesCategories(tabValue, data));

  const handleTabs = useCallback((event, newTabValue) => {
    setTabValue(newTabValue);
    setMovies(showMoviesCategories(newTabValue, movies));
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

  useEffect(() => {
    sortMovies(movies, sortBy)
  }, [sortBy, movies]);

  const handleSortMovie = ({ target: { value }}) => {
    setSortBy(value)
  }

  const handleReset = useCallback(() => {
    setMovie(initialStateMovie)
    setReleaseDate(null)
  }, []);

  const handleReleaseDate = useCallback((newDate) => {
    if (newDate) {
      setReleaseDate(newDate);
    }
  }, []);
  
  const handleOpen = useCallback((id) => {
    setOpen(true);
    if (!id) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setIsDeleted(false);
    setIsSuccessful(false);
    handleReset();
  }, []);

  const handleDelete = useCallback((id) => {
    const deletedMovie = movies.filter((m) => m.id !== id);
    setMovies(deletedMovie);
    handleClose();
  }, []);

  const handleSubmit = useCallback((movie) => {
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
  }, [isEdit]);

  const mainProps = {
    handleClose,
    handleDelete,
    handleOpen,
    handleReleaseDate,
    handleReset,
    handleSortMovie,
    handleSubmit,
    handleTabs,
    isDeleted,
    isSuccessful,
    movie,
    movieId,
    movies,
    open,
    releaseDate,
    sortBy,
    setIsDeleted,
    setMovie,
    setMovieId,
    tabValue,
  };

  return (
    <>
      <Header handleOpen={handleOpen} />
      <Main {...mainProps} />
      <Footer />
    </>
  )
};
