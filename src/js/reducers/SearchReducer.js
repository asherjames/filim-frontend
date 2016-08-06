import {SEARCH_CLICKED, RECEIVE_SEARCH_RESULTS} from '../actions/SearchActions'

const initialState = {
    isSearching: false,
    searchResults: []
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_CLICKED:
            return Object.assign({}, state, {
                isSearching: true
            })
        case RECEIVE_SEARCH_RESULTS:
            return Object.assign({}, state, {
                isSearching: false,
                searchResults: action.payload
            })
        default:
            return state
    }
}