import fetch from 'isomorphic-fetch'

export const REQUEST_GENRES = 'REQUEST_GENRES'
export const RECEIVE_GENRES = 'RECEIVE_GENRES'

export function requestGenres() {
	return {
		type: REQUEST_GENRES
	}
}

export function receiveGenres(json) {
	return {
		type: RECEIVE_GENRES,
		genres: json.data.children.map(child => child.data)
	}
}

export function fetchGenres() {
	return dispatch => {
		dispatch(requestGenres())
		return fetch('localhost:3000/filim-api/genres')
			.then(response => response.json())
			.then(json => dispatch(receiveGenres(json)))
	}
}