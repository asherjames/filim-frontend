import axios from 'axios'

export const SEARCH_CLICKED = 'SEARCH_CLICKED'
export const BEGIN_SEARCH = 'BEGIN_SEARCH'
export const SEARCH_ERROR = 'SEARCH_ERROR'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

export function beginSearch() {
    return {
        type: BEGIN_SEARCH
    }
}

export function receiveSearchResults(results) {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        payload: results
    }
}

export function searchError(err) {
    return {
        type: SEARCH_ERROR,
        payload: err
    }
}

export function searchClicked() {
    return (dispatch) => {
        dispatch(beginSearch())
        axios.get("http://localhost:3000/filim-api/search")
            .then((response) => {
                dispatch(receiveSearchResults(response.data))
            })
            .catch((err) => {
                dispatch(searchError(err))
            })
    }
}