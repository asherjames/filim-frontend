import axios from 'axios'
const qs = require('query-string')

import Config from '../config/config'

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
    return (dispatch, getState) => {
        dispatch(beginSearch())

        const {genres, tvOrMovie, releaseYear, search, actorSearch} = getState()

        const selectedGenre = genres.selectedGenre

        const fromReleaseYear = releaseYear.fromReleaseYear
        const toReleaseYear = releaseYear.toReleaseYear

        const withActors = actorSearch.selectedActors.map(a => a.name)

        axios.get(`${Config.apiUrl}/search/${tvOrMovie}?` + qs.stringify({
                selectedGenre,
                fromReleaseYear,
                toReleaseYear,
                withActors
            }))
            .then((response) => {
                dispatch(receiveSearchResults(response.data.results))
            })
            .catch((err) => {
                dispatch(searchError(err))
            })
    }
}