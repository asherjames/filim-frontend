import axios from 'axios'

export const FETCH_GENRES = 'FETCH_GENRES'
export const FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR'
export const RECEIVE_GENRES = 'RECEIVE_GENRES'
export const FETCH_YEARS = 'FETCH_YEARS'
export const FETCH_YEARS_ERROR = 'FETCH_YEARS_ERROR'
export const RECEIVE_YEARS = 'RECEIVE_YEARS'

export function beginFetchGenres() {
    return {
        type: FETCH_GENRES
    }
}

export function receiveGenres(json) {
    return {
        type: RECEIVE_GENRES,
        payload: json
    }
}

export function fetchGenresError(err) {
    return {
        type: FETCH_GENRES_ERROR,
        payload: err
    }
}

export function fetchGenres() {
    return (dispatch) => {
        dispatch(beginFetchGenres())
        axios.get("http://localhost:3000/filim-api/movies/genres")
            .then((response) => {
                dispatch(receiveGenres(response.data))
            })
            .catch((err) => {
                dispatch(fetchGenresError(err))
            })
    }
}

export function receiveYears(json) {
    return {
        type: RECEIVE_YEARS,
        payload: json
    }
}

export function fetchReleaseYears() {
    return (dispatch) => {
        dispatch(beginFetchReleaseYears())
        axios.get("http://localhost:3000/filim-api/allyears")
            .then((response) => {
                dispatch(receiveYears(response.data))
            })
            .catch((err) => {
                dispatch(fetchReleaseYearsError(err))
            })
    }
}