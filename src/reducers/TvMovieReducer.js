import {TOGGLE_TV_MOVIE} from '../actions/TvMovieActions'

const initialState = {
    selection: "movie"
}

export default function tvMovieReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_TV_MOVIE:
            return Object.assign({}, state, {
                selection: action.payload
            })
        default:
            return state
    }
}