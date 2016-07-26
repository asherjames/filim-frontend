import {BEGIN_FETCH_GENRES,
        FETCH_GENRES,
        FETCH_GENRES_ERROR,
        RECEIVE_GENRES} from '../actions/asyncActions'

export default function asyncReducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_GENRES:
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
        default:
            return state
    }
}