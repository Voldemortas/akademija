const initialState = {
  events: [],
}

const write = (verbPhrase, object) => {
  return `[${new Date()
    .toISOString()
    .replace('T', ' ')
    .replace('Z', '')}] ${verbPhrase} ${object}.`
}

const logs = (state = initialState, action) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        events: [...state.events, write('Užkrauta', 'aplikacija')],
      }
    case 'setGenre':
      return {
        ...state,
        events: [...state.events, write('Žanras pakeistas į', action.name)],
      }
    case 'setHeart':
      return {
        ...state,
        events: [...state.events, write('Uždėta širdelė filmui', action.name)],
      }
    case 'unsetHeart':
      return {
        ...state,
        events: [...state.events, write('Nuimta širdelė filmui', action.name)],
      }
    default:
      return state
  }
}

export default logs
