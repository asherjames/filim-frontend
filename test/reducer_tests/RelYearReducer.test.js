import reducer from '../../src/reducers/RelYearReducer'
import * as actions from '../../src/actions/RelYearActions'

describe('Release year reducer', () => {
    const initialState = {
        years: 0,
        fromReleaseYear: 0,
        toReleaseYear: 0,
        isFetchingYears: false
    }

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle BEGIN_FETCH_YEARS', () => {
        expect(reducer(undefined, {
            type: actions.BEGIN_FETCH_YEARS
        })).toEqual({
            years: 0,
            fromReleaseYear: 0,
            toReleaseYear: 0,
            isFetchingYears: true
        })
    })

    it('should handle RECEIVE_YEARS', () => {
        expect(reducer(undefined, {
            type: actions.RECEIVE_YEARS,
            payload: [1964]
        })).toEqual({
            years: [1964],
            fromReleaseYear: 0,
            toReleaseYear: 0,
            isFetchingYears: false
        })
    })

    it('should handle TO_RELEASE_CHANGED', () => {
        expect(reducer(undefined, {
            type: actions.TO_RELEASE_CHANGED,
            payload: 1964
        })).toEqual({
            years: 0,
            fromReleaseYear: 0,
            toReleaseYear: 1964,
            isFetchingYears: false
        })
    })

    it('should handle FROM_RELEASE_CHANGED', () => {
        expect(reducer(undefined, {
            type: actions.FROM_RELEASE_CHANGED,
            payload: 1964
        })).toEqual({
            years: 0,
            fromReleaseYear: 1964,
            toReleaseYear: 0,
            isFetchingYears: false
        })
    })
})