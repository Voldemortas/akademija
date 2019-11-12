const initialState = {
  list: [],
  hearted: []
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case "setMovies":
      return {
        ...state,
        list: action.list
      };
    case "toggleHeart":
      return {
        ...state,
        hearted: action.toggle
          ? state.hearted.filter(e => e !== action.movie.id)
          : [...state.hearted, action.movie.id]
      };
    default:
      return state;
  }
};

export default cards;
