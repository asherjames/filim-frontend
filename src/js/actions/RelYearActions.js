import axios from 'axios'


export const BEGIN_FETCH_YEARS = 'BEGIN_FETCH_YEARS'
export const RECEIVE_YEARS = 'RECEIVE_YEARS'
export const TO_RELEASE_CHANGED = 'TO_RELEASE_CHANGED'
export const FROM_RELEASE_CHANGED = 'FROM_RELEASE_CHANGED'

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

export function beginFetchReleaseYears() {
    return {
        type: BEGIN_FETCH_YEARS
    }
}

export function receiveYears(json) {
    return {
        type: RECEIVE_YEARS,
        payload: json
    }
}

export function fetchReleaseYearsError(err) {
    return {
        type: FETCH_YEARS_ERROR,
        payload: err
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