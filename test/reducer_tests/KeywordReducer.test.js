import reducer from '../../src/reducers/KeywordReducer'
import * as actions from '../../src/actions/KeywordActions'

describe('Keyword reducer', () => {
    const initialState = {
        input: ""
    }

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle KEYWORD_CHANGED', () => {
        expect(reducer(undefined, {
            type: actions.KEYWORD_CHANGED,
            payload: "James Bond"
        })).toEqual({
            input: "James Bond"
        })
    })
})
