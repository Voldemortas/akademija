const initialState = {
  events: [],
  init: 0
};

const write = (verbPhrase, object) => {
  return `[${new Date()
    .toISOString()
    .replace("T", " ")
    .replace("Z", "")}] ${verbPhrase} ${object}.`;
};

const logs = (state = initialState, action) => {
  if (action.type.includes("@redux/INIT")) {
    return {
      ...state,
      events: [...state.events, write("Užkrauta", "aplikacija")]
    };
  }
  switch (action.type) {
    case "setSelected":
      return {
        ...state,
        events: [
          ...state.events,
          write("Žanras pakeistas į", action.genre.name)
        ]
      };
    case "toggleHeart":
      return {
        ...state,
        events: [
          ...state.events,
          write(
            (action.toggle ? "Nuimta" : "Uždėta") + " širdelė filmui",
            action.movie.title
          )
        ]
      };
    default:
      return state;
  }
};

export default logs;
