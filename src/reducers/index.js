import {combineReducers} from 'redux'
import genreReducer from './GenreReducer'
import tvMovieReducer from './TvMovieReducer'
import relYearReducer from './RelYearReducer'
import searchReducer from './SearchReducer'

export default combineReducers({
    genres: genreReducer,
    tvOrMovie: tvMovieReducer,
    releaseYear: relYearReducer,
    search: searchReducer
})