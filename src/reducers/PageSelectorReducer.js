import * as a from '../actions/PageSelectorActions'

const initialState = {
    page: 1
}

export default function pageSelectorReducer(state = initialState, action) {
    switch (action.type) {
        case a.PAGE_INDEX_SELECTED:
            return Object.assign({}, state, {
                page: action.payload
            })
        case a.PAGE_INDEX_RESET:
            return Object.assign({}, state, {
                page: 1
            })
        default:
            return state
    }
}