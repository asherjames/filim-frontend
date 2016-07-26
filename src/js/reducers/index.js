import { combineReducers } from 'redux'
import std from './Reducer'
import async from './AsyncReducer'

export default combineReducers({
    async,
    std
})