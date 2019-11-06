import axios from 'axios'
import { setGenres, setMovies } from './actions'
import { endpoints } from './config'

export const getGenres = () => dispatch => {
  axios.get(endpoints.genres()).then(data => {
    dispatch(setGenres(data.data.genres))
  })
}

export const getGenreMovies = (genre = 0) => dispatch => {
  const callback =
    genre === 0 ? endpoints.mostPopularMovies : endpoints.genreMovies
  axios.get(callback(genre)).then(data => {
    dispatch(setMovies(data.data.results))
  })
}