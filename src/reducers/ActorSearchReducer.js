import * as a from '../actions/ActorActions'

let initialState = {
    isSearching: false,
    query: "",
    selectedActors: [],
    searchResults: []
}

export default function actorSearchReducer(state = initialState, action) {
    switch (action.type) {
        case a.BEGIN_SEARCH_ACTORS:
            return Object.assign({}, state, {
                isSearching: true
            })
        case a.RECEIVE_ACTORS:
            return Object.assign({}, state, {
                searchResults: action.payload.data
            })
        case a.ACTOR_SELECTED:
            return Object.assign({}, state, {
                selectedActors: state.selectedActors.concat(action.payload)
            })
        case a.ACTOR_DELETED:
            return Object.assign({}, state, {
                selectedActors: state.selectedActors.filter(a => a.id !== action.payload)
            })
        default:
            return state
    }
}