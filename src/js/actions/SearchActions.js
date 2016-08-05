export const SEARCH_CLICKED = 'SEARCH_CLICKED'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

export function searchClicked() {
    return {
        type: SEARCH_CLICKED
    }
}

export function receiveSearchResults(results) {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        payload: results
    }
}