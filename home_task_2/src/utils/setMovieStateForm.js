export const setMovieStateForm = (movieId, movies) => {
  const movie = Object.values(movies).find(({ id }) => id === movieId)

  return {
    genres: movie ? movie.genres : [],
    overview: movie ? movie.overview : '',
    poster_path: movie ? movie.poster_path : '',
    release_date: movie ? movie.release_date : null,
    revenue: movie ? movie.revenue : '',
    vote_count: movie ? movie.vote_count : '',
    title: movie ? movie.title : ''
  }
}
