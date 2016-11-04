import reducer from '../../src/reducers/PageSelectorReducer'
import * as actions from '../../src/actions/PageSelectorActions'

describe('Page selector reducer', () => {
    const initialState = {
        page: 0
    }

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle PAGE_INDEX_SELECTED', () => {
        expect(reducer(undefined, {
            type: actions.PAGE_INDEX_SELECTED,
            payload: 1
        })).toEqual({
            page: 1
        })
    })
})