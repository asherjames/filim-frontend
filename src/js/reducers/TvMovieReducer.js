import TOGGLE_TV_MOVIE from '../actions/actions'

let initialState = {
    tvOrMovie: "movie"
}

export default function tvMovieReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_TV_MOVIE:
            return Object.assign({}, state, {
                tvOrMovie: action.payload
            })
        default:
            return state
    }
}