import {
    TO_RELEASE_CHANGED,
    FROM_RELEASE_CHANGED,
    SEARCH_CLICKED
} from '../actions/RelYearActions'

let initialState = {
    years: 0,
    fromReleaseYear: 0,
    toReleaseYear: 0,
    isFetchingYears: false
}

export default function relYearReducer(state = initialState, action) {
    switch (action.type) {
        case TO_RELEASE_CHANGED:
            return Object.assign({}, state, {
                toReleaseYear: action.payload
            })
        case FROM_RELEASE_CHANGED:
            return Object.assign({}, state, {
                fromReleaseYear: action.payload
            })
        default:
            return state
    }
}