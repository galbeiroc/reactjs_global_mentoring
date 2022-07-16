export const showMoviesCategories = (tabVal, movies) => {
  switch (tabVal) {
    case '2':
      return Object.values(movies).filter((movie) => movie.genres.includes('Fantasy'));
    case '3':
      return Object.values(movies).filter((movie) => movie.genres.includes('Comedy'));
    case '4':
      return Object.values(movies).filter((movie) => movie.genres.includes('Horror'));
    case '5':
      return Object.values(movies).filter((movie) => movie.genres.includes('Action'));
    default:
      return Object.values(movies).map((movie) => movie);
  }
};
