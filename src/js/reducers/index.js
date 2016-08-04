import {combineReducers} from 'redux'
import genreReducer from './GenreReducer'
import tvMovieReducer from './TvMovieReducer'
import relYearReducer from './RelYearReducer'

export default combineReducers({
    genres: genreReducer,
    tvOrMovie: tvMovieReducer,
    releaseYear: relYearReducer
})