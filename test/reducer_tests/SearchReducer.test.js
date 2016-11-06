import reducer from '../../src/reducers/SearchReducer'
import * as actions from '../../src/actions/SearchActions'

describe('Search reducer', () => {
    const initialState = {
        isSearching: false,
        hasSearched: false,
        searchResults: [],
        totalPages: 0
    }

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle BEGIN_SEARCH', () => {
        expect(reducer(undefined, {
            type: actions.BEGIN_SEARCH
        })).toEqual({
            isSearching: true,
            hasSearched: false,
            searchResults: [],
            totalPages: 0
        })
    })

    it('should handle RECEIVE_SEARCH_RESULTS', () => {
        expect(reducer(undefined, {
            type: actions.RECEIVE_SEARCH_RESULTS,
            payload: {
                results: {
                    movie: "Goldfinger",
                    year: 1964
                },
                total_pages: 1,
            }
        })).toEqual({
            isSearching: false,
            hasSearched: true,
            searchResults: {
                movie: "Goldfinger",
                year: 1964
            },
            totalPages: 1
        })
    })
})