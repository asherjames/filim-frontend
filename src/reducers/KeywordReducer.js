import * as a from '../actions/KeywordActions'

const initialState = {
    input: ""
}

export default function keywordReducer(state = initialState, action) {
    switch (action.type) {
        case a.KEYWORD_CHANGED:
            return Object.assign({}, state, {
                input: action.payload
            })
        default:
            return state
    }
}