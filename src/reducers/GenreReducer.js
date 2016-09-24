import {
    GENRE_SELECTED,
    FETCH_GENRES,
    FETCH_GENRES_ERROR,
    RECEIVE_MOVIE_GENRES
} from '../actions/GenreActions'

let initialState = {
    movieGenres: [],
    tvGenres: [],
    isFetchingMovieGenres: false,
    isFetchingTvGenres: false
}

export default function genreReducer(state = initialState, action) {
    switch (action.type) {
        case GENRE_SELECTED:
            return Object.assign({}, state, {
                selectedGenre: action.payload
            })
        case RECEIVE_MOVIE_GENRES:
            return Object.assign({}, state, {
                movieGenres: action.payload,
                isFetchingGenres: false
            })
        case FETCH_GENRES:
            return Object.assign({}, state, {
                isFetchingGenres: true
            })
        case FETCH_GENRES_ERROR:
            return Object.assign({}, state, {
                isFetchingGenres: false
            })
        default:
            return state
    }
}