const initialState = {};

const write = (verbPhrase, object) => {
  return [
    new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", ""),
    `${verbPhrase} ${object}.`
  ];
};

const logs = (state = initialState, action) => {
  var log, temp;
  if (action.type.includes("@redux/INIT")) {
    log = write("Užkrauta", "aplikacija");
    temp = { ...state };
    temp[log[0]] = log[1];

    return {
      ...temp
    };
  }
  switch (action.type) {
    case "setSelected":
      log = write("Žanras pakeistas į", action.genre.name);
      temp = { ...state };
      temp[log[0]] = log[1];
      return {
        ...temp
      };
    case "toggleHeart":
      log = write(
        (action.toggle ? "Nuimta" : "Uždėta") + " širdelė filmui",
        action.movie.title
      );
      temp = { ...state };
      temp[log[0]] = log[1];
      return {
        ...temp
      };
    default:
      return state;
  }
};

export default logs;
