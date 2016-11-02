import reducer from '../../src/reducers/SearchReducer'
import * as actions from '../../src/actions/SearchActions'

describe('Search reducer', () => {
    const initialState = {
        isSearching: false,
        hasSearched: false,
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
            hasSearched: true,
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
            hasSearched: true,
            searchResults: [
                {
                    movie: "Goldfinger",
                    year: 1964
                }
            ]
        })
    })
})