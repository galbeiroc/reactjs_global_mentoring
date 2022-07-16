export const editMovie = (movie, movies) => {
  const foundMovie = movies.find((m) => m.id === movie.id)
  const filteredMovie = movies.filter((m) => m.id !== movie.id)
  const editedMovie = {...foundMovie, ...movie }

  return [...filteredMovie, {  ...editedMovie }]
}
