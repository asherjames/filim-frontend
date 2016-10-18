import * as a from '../actions/GenreActions'

const initialState = {
    movieGenres: [],
    tvGenres: [],
    selectedGenre: 0,
    isFetchingGenres: false
}

export default function genreReducer(state = initialState, action) {
    switch (action.type) {
        case a.GENRE_SELECTED:
            return Object.assign({}, state, {
                selectedGenre: action.payload
            })
        case a.RECEIVE_MOVIE_GENRES:
            return Object.assign({}, state, {
                movieGenres: action.payload,
                isFetchingGenres: false
            })
        case a.BEGIN_FETCH_GENRES:
            return Object.assign({}, state, {
                isFetchingGenres: true
            })
        case a.FETCH_GENRES_ERROR:
            return Object.assign({}, state, {
                isFetchingGenres: false
            })
        default:
            return state
    }
}