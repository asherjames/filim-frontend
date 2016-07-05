import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers/Reducers'

export default function configureStore() {
	const initialState = {
		genres: [],
		isFetchingGenres: false
	}

	const store = createStore(
		reducer,
		initialState,
		applyMiddleware(thunk, logger)
	)

	return store
}