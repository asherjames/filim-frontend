import * as a from '../actions/SearchActions'

const initialState = {
    isSearching: false,
    searchResults: []
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case a.BEGIN_SEARCH:
            return Object.assign({}, state, {
                isSearching: true
            })
        case a.RECEIVE_SEARCH_RESULTS:
            return Object.assign({}, state, {
                isSearching: false,
                searchResults: action.payload
            })
        default:
            return state
    }
}