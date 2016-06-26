import { combineReducers } from 'redux'
import { REQUEST_GENRES, RECEIVE_GENRES } from '../actions'

function reducer(state, action) {
	switch (action.type) {
		case RECIEVE_GENRES:
			return Object.assign({}, state, {
				genres: actions.genres
			})
		default:
			return state
	}
}

export default reducer