import * as a from '../actions/RelYearActions'

let initialState = {
    years: 0,
    fromReleaseYear: 0,
    toReleaseYear: 0,
    isFetchingYears: false
}

export default function relYearReducer(state = initialState, action) {
    switch (action.type) {
        case a.BEGIN_FETCH_YEARS:
            return Object.assign({}, state, {
                isFetchingYears: true
            })
        case a.RECEIVE_YEARS:
            return Object.assign({}, state, {
                isFetchingYears: false,
                years: action.payload
            })
        case a.TO_RELEASE_CHANGED:
            return Object.assign({}, state, {
                toReleaseYear: action.payload
            })
        case a.FROM_RELEASE_CHANGED:
            return Object.assign({}, state, {
                fromReleaseYear: action.payload
            })
        default:
            return state
    }
}