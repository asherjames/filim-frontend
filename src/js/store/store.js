import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers/index'

export default function configureStore() {
    const initialState = {
        genreList: {
            movieGenres: [],
            tvGenres: [],
            isFetchingMovieGenres: false,
            isFetchingTvGenres: false
        },
        tvOrMovie: "movie",
        releaseYear: {
            fromReleaseYear: 0,
            toReleaseYear: 0,
            isFetchingYears: false
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