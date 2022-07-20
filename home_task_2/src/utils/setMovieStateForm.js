export const setMovieStateForm = (movieId, movies, isEdit) => {
  const movie = Object.values(movies).find(({ id }) => id === movieId);

  return {
    genres: movie && isEdit ? movie.genres : [],
    id: movie && isEdit ? movie.id : null,
    overview: movie && isEdit ? movie.overview : '',
    poster_path: movie && isEdit ? movie.poster_path : '',
    release_date: movie && isEdit ? movie.release_date : null,
    revenue: movie && isEdit ? movie.revenue : undefined,
    vote_count: movie && isEdit ? movie.vote_count : undefined,
    title: movie && isEdit ? movie.title : ''
  };
}
