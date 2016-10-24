import reducer from '../../src/reducers/TvMovieReducer'
import * as actions from '../../src/actions/TvMovieActions'

describe('TV/Movie reducer', () => {
    const initialState = {
        selection: "movie"
    }

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle TOGGLE_TV_MOVIE', () => {
        expect(reducer(undefined, {
            type: actions.TOGGLE_TV_MOVIE,
            payload: "tv"
        })).toEqual({
                selection: "tv"
            }
        )
    })
})