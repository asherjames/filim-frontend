import {PAGE_INDEX_SELECTED} from '../actions/PageSelectorActions'

const initialState = {
    page: 0
}

export default function pageSelectorReducer(state = initialState, action) {
    switch (action.type) {
        case PAGE_INDEX_SELECTED:
            return Object.assign({}, state, {
                page: action.payload
            })
        default:
            return state
    }
}