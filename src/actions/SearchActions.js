import axios from 'axios'
const qs = require('query-string')

import {config} from '../config/config'

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

        const tvOrMovie = getState().tvOrMovie.selection

        axios.get(`${config.apiUrl}/search/${tvOrMovie}?` + determineQueryString(getState()))
            .then(response => dispatch(receiveSearchResults(response.data.results)))
            .catch(err => dispatch(searchError(err)))
    }
}

function determineQueryString(state) {
    const {genres, releaseYear, actorSearch, keyword, sortBy} = state

    let queryObj = {
        selectedGenre: genres.selectedGenre,
        fromReleaseYear: releaseYear.fromReleaseYear,
        toReleaseYear: releaseYear.toReleaseYear,
        withActors: actorSearch.selectedActors[0] ? actorSearch.selectedActors[0].id : "",
        withKeyword: keyword.input,
        withSorter: sortBy.sorter
    }

    for (let prop in queryObj) {
        if (queryObj[prop] === null || queryObj[prop] === undefined || queryObj[prop] === "") {
            delete queryObj[prop]
        }else if (queryObj[prop].isArray && queryObj[prop].length === 0) {
            delete queryObj.prop
        }
    }

    return qs.stringify(queryObj)
}