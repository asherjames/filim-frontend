import { combineReducers } from 'redux'
import { FETCH_GENRES, FETCH_GENRES_ERROR, RECEIVE_GENRES } from '../actions/actions'

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
		default:
			return state
	}
}

export default reducer