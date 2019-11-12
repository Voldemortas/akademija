export const toggleCards = shouldShow => ({
  type: "toggleCards",
  shouldShow
});

export const setGenres = list => ({
  type: "setGenres",
  list: [{ id: 0, name: "Most popular" }, ...list]
});

export const setSelected = genre => ({
  type: "setSelected",
  genre
});

export const setMovies = list => ({
  type: "setMovies",
  list
});

export const toggleHeart = (movie, toggle) => ({
  type: "toggleHeart",
  movie,
  toggle
});
