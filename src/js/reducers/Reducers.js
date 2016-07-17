import { combineReducers } from 'redux'
import { FETCH_GENRES, 
         FETCH_GENRES_ERROR, 
         RECEIVE_GENRES,
         TOGGLE_TV_MOVIE,
         GENRE_SELECTED } from '../actions/actions'

function reducer(state, action) {
    switch (action.type) {
        case RECEIVE_GENRES:
            console.log('received genres: ' + action.payload)
            return Object.assign({}, state, {
                genres: action.payload, 
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
        case TOGGLE_TV_MOVIE:
            return Object.assign({}, state, {
                tvOrMovie: action.payload
            })
        case GENRE_SELECTED:
            return Object.assign({}, state, {
                selectedGenre: action.payload
            })
        default:
            return state
    }
}

export default reducer