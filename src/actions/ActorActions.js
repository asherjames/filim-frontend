import axios from 'axios'
const qs = require('query-string')
import Config from '../config/config'

export const BEGIN_SEARCH_ACTORS = 'BEGIN_SEARCH_ACTORS'
export const FETCH_ACTORS_ERROR = 'FETCH_ACTORS_ERROR'
export const RECEIVE_ACTORS = 'RECEIVE_ACTORS'
export const ACTOR_SELECTED = 'ACTOR_SELECTED'

export function actionSelected(id) {
    return {
        type: ACTOR_SELECTED,
        payload: id
    }
}

export function beginSearchActors() {
    return {
        type: BEGIN_SEARCH_ACTORS
    }
}

export function fetchActorsError(err) {
    return {
        type: FETCH_ACTORS_ERROR,
        payload: err
    }
}

export function receiveActors(actors) {
    return {
        type: RECEIVE_ACTORS,
        payload: actors
    }
}

export function fetchActors() {
    return(dispatch, getState) => {
        dispatch(beginSearchActors())

        const query = getState().actorSearch.query

        axios.get(`${Config.apiUrl}/search/actor?` + qs.stringify({
                query
            }))
            .then((data) => {
                dispatch(receiveActors(data))
            })
            .catch((err) => {
                dispatch(fetchActorsError(err))
            })
    }
}