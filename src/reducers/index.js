import {combineReducers} from 'redux'
import actorSearchReducer from './ActorSearchReducer'
import genreReducer from './GenreReducer'
import keywordReducer from './KeywordReducer'
import relYearReducer from './RelYearReducer'
import searchReducer from './SearchReducer'
import sortByReducer from './SortByReducer'
import tvMovieReducer from './TvMovieReducer'

export default combineReducers({
    genres: genreReducer,
    tvOrMovie: tvMovieReducer,
    releaseYear: relYearReducer,
    search: searchReducer,
    actorSearch: actorSearchReducer,
    keyword: keywordReducer,
    sortBy: sortByReducer
})