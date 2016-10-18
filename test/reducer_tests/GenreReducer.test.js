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
})