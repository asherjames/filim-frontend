import {combineReducers} from 'redux'
import genreReducer from './GenreReducer'

export default combineReducers({
    genres: genreReducer,
    tvOrMovie: tvMovieReducer,

})