import {TOGGLE_TV_MOVIE,
        GENRE_SELECTED,
        TO_RELEASE_CHANGED,
        FROM_RELEASE_CHANGED,
        SEARCH_CLICKED} from '../actions/actions'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case TOGGLE_TV_MOVIE:
            return Object.assign({}, state, {
                tvOrMovie: action.payload
            })
        case GENRE_SELECTED:
            return Object.assign({}, state, {
                selectedGenre: action.payload
            })
        case TO_RELEASE_CHANGED:
            return Object.assign({}, state, {
                toReleaseYear: action.payload
            })
        case FROM_RELEASE_CHANGED:
            return Object.assign({}, state, {
                fromReleaseYear: action.payload
            })
        case SEARCH_CLICKED:
            return Object.assign({}, state, {
                sea
            })
        default:
            return state
    }
}