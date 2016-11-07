import reducer from '../../src/reducers/PageSelectorReducer'
import * as actions from '../../src/actions/PageSelectorActions'

describe('Page selector reducer', () => {
    const initialState = {
        page: 1
    }

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle PAGE_INDEX_SELECTED', () => {
        expect(reducer(undefined, {
            type: actions.PAGE_INDEX_SELECTED,
            payload: 5
        })).toEqual({
            page: 5
        })
    })

    it('should handle PAGE_INDEX_RESET', () => {
        expect(reducer(undefined, {
            type: actions.PAGE_INDEX_RESET
        })).toEqual({
            page: 1
        })
    })
})