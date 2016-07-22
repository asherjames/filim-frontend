import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers/index'

export default function configureStore() {
    const initialState = {
        genres: [],
        isFetchingGenres: false,
        isFetchingYears: false,
        tvOrMovie: "movie",
        selectedGenre: 0,
        years: [],
        fromReleaseYear: 0,
        toReleaseYear: 0
    }

    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(
            thunkMiddleware, 
            createLogger()
        )
    )

    return store
}