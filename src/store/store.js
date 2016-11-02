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
            isFetchingGenres: false
        },
        tvOrMovie: {
            selection: "movie"
        },
        releaseYear: {
            years: [],
            fromReleaseYear: 0,
            toReleaseYear: new Date().getFullYear(),
            isFetchingYears: false
        },
        search: {
            isSearching: false,
            hasSearched: false,
            searchResults: []
        },
        actorSearch: {
            isSearching: false,
            query: "",
            selectedActors: [],
            searchResults: []
        },
        keyword: {
            input: ""
        },
        sortBy: {
            sorter: ""
        },
        pagination: {
            page: 1
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