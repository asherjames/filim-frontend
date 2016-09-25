import {combineReducers} from 'redux'
import genreReducer from './GenreReducer'
import tvMovieReducer from './TvMovieReducer'
import relYearReducer from './RelYearReducer'
import searchReducer from './SearchReducer'
import actorSearchReducer from './ActorSearchReducer'

export default combineReducers({
    genres: genreReducer,
    tvOrMovie: tvMovieReducer,
    releaseYear: relYearReducer,
    search: searchReducer,
    actorSearch: actorSearchReducer
})