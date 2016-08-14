import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import reducer from '../reducers/index'

export default function configureStore() {
    const initialState = {
        genres: {
            movieGenres: [],
            tvGenres: [],
            selectedGenre: 0,
            isFetchingMovieGenres: false,
            isFetchingTvGenres: false
        },
        tvOrMovie: "movie",
        releaseYear: {
            years: [],
            fromReleaseYear: 0,
            toReleaseYear: new Date().getFullYear(),
            isFetchingYears: false
        },
        search: {
            isSearching: false,
            searchResults: []
        }
    }

    return createStore(
        reducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            createLogger()
        )
    )
}