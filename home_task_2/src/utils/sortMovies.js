export const sortMovies = (movies, sortBy) => {
  switch (sortBy) {
    case 'old_date':
      return movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    case 'sort_az':
      return movies.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  }
};
