import axios from 'axios'

import {config} from '../config/config'

export const GENRE_SELECTED = 'GENRE_SELECTED'
export const BEGIN_FETCH_GENRES = 'BEGIN_FETCH_GENRES'
export const FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR'
export const RECEIVE_MOVIE_GENRES = 'RECEIVE_MOVIE_GENRES'

export function genreSelected(id) {
    return {
        type: GENRE_SELECTED,
        payload: id
    }
}

export function beginFetchGenres() {
    return {
        type: BEGIN_FETCH_GENRES
    }
}

export function receiveGenres(json) {
    return {
        type: RECEIVE_MOVIE_GENRES,
        payload: json
    }
}

export function fetchGenresError(err) {
    return {
        type: FETCH_GENRES_ERROR,
        payload: err
    }
}

export function fetchMovieGenres() {
    return (dispatch) => {
        dispatch(beginFetchGenres())
        axios.get(`${config.apiUrl}/movies/genres`)
            .then((response) => {
                dispatch(receiveGenres(response.data))
            })
            .catch((err) => {
                dispatch(fetchGenresError(err))
            })
    }
}