import { combineReducers } from 'redux'
import reducer from './Reducer'
import async from './AsyncReducer'

export default combineReducers({
    reducer,
    async
})