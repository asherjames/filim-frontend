import { combineReducers } from 'redux'
import * as actType from '../actions/actions'
import * as asyncType from '../actions/asyncActions'

export default function reducer(state, action) {
    switch (action.type) {
        case asyncType.RECEIVE_GENRES:
            console.log('received genres: ' + action.payload)
            return Object.assign({}, state, {
                genres: action.payload, 
                isFetchingGenres: false
            })
        case actType.FETCH_GENRES:
            return Object.assign({}, state, {
                isFetchingGenres: true
            })
        case actType.FETCH_GENRES_ERROR:
            return Object.assign({}, state, {
                isFetchingGenres: false
            })
        case actType.TOGGLE_TV_MOVIE:
            return Object.assign({}, state, {
                tvOrMovie: action.payload
            })
        case actType.GENRE_SELECTED:
            return Object.assign({}, state, {
                selectedGenre: action.payload
            })
        case actType.TO_RELEASE_CHANGED:
            return Object.assign({}, state, {
                toReleaseYear: action.payload
            })
        case actType.FROM_RELEASE_CHANGED:
            return Object.assign({}, state, {
                fromReleaseYear: action.payload
            })
        default:
            return state
    }
}