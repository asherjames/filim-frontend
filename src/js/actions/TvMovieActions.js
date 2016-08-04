export const TOGGLE_TV_MOVIE = 'TOGGLE_TV_MOVIE'

export function toggleTvMovie(value) {
    return {
        type: TOGGLE_TV_MOVIE,
        payload: value
    }
}