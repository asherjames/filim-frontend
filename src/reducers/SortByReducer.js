import * as a from '../actions/SortByActions'

const initialState = {
    sorter: ""
}

export default function sortByReducer(state = initialState, action) {
    switch (action.type) {
        case a.SORTER_SELECTED:
            return Object.assign({}, state, {
                sorter: action.payload
            })
        default:
            return state
    }
}
