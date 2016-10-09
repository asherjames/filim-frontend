import axios from 'axios'
const qs = require('query-string')

import Config from '../config/config'

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

        const {genres, tvOrMovie, releaseYear, search, actorSearch, keyword, sortBy} = getState()

        const selectedGenre = genres.selectedGenre
        const fromReleaseYear = releaseYear.fromReleaseYear
        const toReleaseYear = releaseYear.toReleaseYear
        // const withActors = actorSearch.selectedActors.map(a => a.name)
        const withActors = actorSearch.selectedActors[0].id
        const withKeyword = keyword.input
        const withSorter = sortBy.sorter

        axios.get(`${Config.apiUrl}/search/${tvOrMovie}?` + qs.stringify({
                selectedGenre,
                fromReleaseYear,
                toReleaseYear,
                withActors,
                withKeyword,
                withSorter
            }))
            .then((response) => {
                dispatch(receiveSearchResults(response.data.results))
            })
            .catch((err) => {
                dispatch(searchError(err))
            })
    }
}