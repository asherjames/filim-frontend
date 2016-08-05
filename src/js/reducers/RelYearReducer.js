import {
    BEGIN_FETCH_YEARS,
    RECEIVE_YEARS,
    TO_RELEASE_CHANGED,
    FROM_RELEASE_CHANGED
} from '../actions/RelYearActions'

let initialState = {
    years: 0,
    fromReleaseYear: 0,
    toReleaseYear: 0,
    isFetchingYears: false
}

export default function relYearReducer(state = initialState, action) {
    switch (action.type) {
        case BEGIN_FETCH_YEARS:
            return Object.assign({}, state, {
                isFetchingYears: true
            })
        case RECEIVE_YEARS:
            return Object.assign({}, state, {
                isFetchingYears: false,
                years: action.payload
            })
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