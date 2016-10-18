import reducer from '../../src/reducers/GenreReducer'
import * as actions from '../../src/actions/GenreActions'

describe('Genre reducer', () => {
    const initialState = {
        movieGenres: [],
        tvGenres: [],
        selectedGenre: 0,
        isFetchingGenres: false
    }

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle BEGIN_FETCH_GENRES', () => {
        expect(reducer(undefined, {
            type: actions.BEGIN_FETCH_GENRES
        })).toEqual({
            movieGenres: [],
            tvGenres: [],
            selectedGenre: 0,
            isFetchingGenres: true
        })
    })

    it('should handle FETCH_GENRES_ERROR', () => {
        expect(reducer(undefined, {
            type: actions.FETCH_GENRES_ERROR,
            payload: {err: "err"}
        })).toEqual(initialState)
    })

    it('should handle RECEIVE_MOVIE_GENRES', () => {
        expect(reducer(undefined, {
            type: actions.RECEIVE_MOVIE_GENRES,
            payload: [
                {
                    id: 123,
                    name: "Action"
                }
            ]
        })).toEqual({
            movieGenres: [{
                id: 123,
                name: "Action"
            }],
            tvGenres: [],
            selectedGenre: 0,
            isFetchingGenres: false
        })
    })

    it('should handle GENRE_SELECTED', () => {
        expect(reducer(undefined, {
            type: actions.GENRE_SELECTED,
            payload: 123
        })).toEqual({
            movieGenres: [],
            tvGenres: [],
            selectedGenre: 123,
            isFetchingGenres: false
        })
    })
})