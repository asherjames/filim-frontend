import axios from 'axios'
const qs = require('query-string')
import {config} from '../config/config'

export const BEGIN_SEARCH_ACTORS = 'BEGIN_SEARCH_ACTORS'
export const FETCH_ACTORS_ERROR = 'FETCH_ACTORS_ERROR'
export const RECEIVE_ACTORS = 'RECEIVE_ACTORS'
export const ACTOR_SELECTED = 'ACTOR_SELECTED'
export const ACTOR_DELETED = 'ACTOR_DELETED'

export function actorSelected(actor) {
    return {
        type: ACTOR_SELECTED,
        payload: actor
    }
}

export function actorDeleted(actor) {
    return {
        type: ACTOR_DELETED,
        payload: actor
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

export function fetchActors(searchTerm) {
    return(dispatch, getState) => {
        dispatch(beginSearchActors())

        axios.get(`${config.apiUrl}/search/actor?` + qs.stringify({
                searchTerm
            }))
            .then((data) => {
                dispatch(receiveActors(data))
            })
            .catch((err) => {
                dispatch(fetchActorsError(err))
            })
    }
}