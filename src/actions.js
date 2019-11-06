export const toggleCards = shouldShow => ({
  type: 'toggleCards',
  shouldShow,
})

export const setGenres = list => ({
  type: 'setGenres',
  list: [{ id: 0, name: 'Most popular' }, ...list],
})

export const setSelected = selected => ({
  type: 'setSelected',
  selected,
})

export const setMovies = list => ({
  type: 'setMovies',
  list,
})
