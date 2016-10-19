import reducer from '../../src/reducers/SortByReducer'
import * as actions from '../../src/actions/SortByActions'

describe('Sort by reducer', () => {
    const initialState = {
        sorter: ""
    }

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle SORTER_SELECTED', () => {
        expect(reducer(undefined, {
            type: actions.SORTER_SELECTED,
            payload: "year_desc"
        })).toEqual({
            sorter: "year_desc"
        })
    })
})