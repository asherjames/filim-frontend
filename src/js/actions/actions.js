import axios from 'axios'

export const FETCH_GENRES = 'FETCH_GENRES'
export const FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR'
export const RECEIVE_GENRES = 'RECEIVE_GENRES'
export const TOGGLE_TV_MOVIE = 'TOGGLE_TV_MOVIE'

export function beginFetchGenres() {
	return {
		type: FETCH_GENRES
	}
}

export function receiveGenres(json) {
	return {
		type: RECEIVE_GENRES,
		payload: json
	}
}

export function fetchGenresError(err) {
	return {
		type: FETCH_GENRES_ERROR,
		payload: err
	}
}

export function fetchGenres() {
	return (dispatch) => {
		dispatch(beginFetchGenres())
		axios.get("http://localhost:3000/filim-api/movies/genres")
			.then((response) => {
				dispatch(receiveGenres(response.data))
			})
			.catch((err) => {
				dispatch(fetchGenresError(err))
			})
	}
}

export function toggleTvMovie(value) {
	return {
		type: TOGGLE_TV_MOVIE,
		payload: value
	}
}