import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

export default function configureStore() {
	const loggerMiddleware = createLogger()

	const initialState = {
		genres: []
	}

	const store = createStore(
		reducer,
		initialState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	)

	return store
}