export const TOGGLE_TV_MOVIE = 'TOGGLE_TV_MOVIE'
export const GENRE_SELECTED = 'GENRE_SELECTED'
export const TO_RELEASE_CHANGED = 'TO_RELEASE_CHANGED'
export const FROM_RELEASE_CHANGED = 'FROM_RELEASE_CHANGED'

export function toggleTvMovie(value) {
    return {
        type: TOGGLE_TV_MOVIE,
        payload: value
    }
}

export function genreSelected(id) {
    return {
        type: GENRE_SELECTED,
        payload: id
    }
}

export function toReleaseYearChanged(year) {
    return {
        type: TO_RELEASE_CHANGED,
        payload: year
    }
}

export function fromReleaseYearChanged(year) {
    return {
        type: FROM_RELEASE_CHANGED,
        payload: year
    }
}