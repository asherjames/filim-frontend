import reducer from '../../src/reducers/SearchReducer'
import * as actions from '../../src/actions/SearchActions'

describe('Search reducer', () => {
    const initialState = {
        isSearching: false,
        searchResults: []
    }

    it('should return initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState)
    })

    it('should handle BEGIN_SEARCH', () => {
        expect(reducer(undefined, {
            type: actions.BEGIN_SEARCH
        })).toEqual({
            isSearching: true,
            searchResults: []
        })
    })

    it('should handle RECEIVE_SEARCH_RESULTS', () => {
        expect(reducer(undefined, {
            type: actions.RECEIVE_SEARCH_RESULTS,
            payload: [
                {
                    movie: "Goldfinger",
                    year: 1964
                }
            ]
        })).toEqual({
            isSearching: false,
            searchResults: [
                {
                    movie: "Goldfinger",
                    year: 1964
                }
            ]
        })
    })
})