import reducer from '../../src/reducers/ActorSearchReducer'
import * as actions from '../../src/actions/ActorActions'

describe('Actor reducer', () => {
    const initialState = {
        isSearching: false,
        query: "",
        selectedActors: [],
        searchResults: []
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ACTOR_SELECTED', () => {
        expect(
            reducer(undefined, {
                type: actions.ACTOR_SELECTED,
                payload: {
                    id: 123,
                    name: "Sean Connery"
                }
            })
        ).toEqual({
            isSearching: false,
            query: "",
            selectedActors: [{
                id: 123,
                name: "Sean Connery"
            }],
            searchResults: []
        })
    })

    it('should handle ACTOR_DELETED', () => {
        expect(
            reducer({
                isSearching: false,
                query: "",
                selectedActors: [{
                    id: 123,
                    name: "Sean Connery"
                }],
                searchResults: []
            }, {
                type: actions.ACTOR_DELETED,
                payload: 123
            })).toEqual(initialState)
    })

    it('should handle BEGIN_SEARCH_ACTORS', () => {
        expect(
            reducer(undefined, {
                type: actions.BEGIN_SEARCH_ACTORS
            })
        ).toEqual({
            isSearching: true,
            query: "",
            selectedActors: [],
            searchResults: []
        })
    })

    it('should handle RECEIVE_ACTORS', () => {
        expect(
            reducer(undefined, {
                type: actions.RECEIVE_ACTORS,
                payload: {
                    data:[{
                        id: 123,
                        name: 'Sean Connery'
                    }]
                }
            })
        ).toEqual({
            isSearching: false,
            query: "",
            selectedActors: [],
            searchResults: [{
                id: 123,
                name: 'Sean Connery'
            }]
        })
    })
})
