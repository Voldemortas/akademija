const initialState = {
  list: [],
}

const cards = (state = initialState, action) => {
  switch (action.type) {
    case 'setMovies':
      return {
        ...state,
        list: action.list,
      }
    default:
      return state
  }
}

export default cards
