const initialState = {
  showCards: true,
  genres: [],
  selected: 0,
}

const component = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards':
      return {
        ...state,
        showCards: action.shouldShow,
      }
    case 'setGenres':
      return {
        ...state,
        genres: action.list,
      }
    case 'setSelected':
      return {
        ...state,
        selected: action.selected,
      }
    default:
      return state
  }
}

export default component
