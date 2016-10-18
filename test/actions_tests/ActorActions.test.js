import * as actions from '../../src/actions/ActorActions'
import {config} from '../../src/config/config'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

describe('Actor actions', () => {
    const actor = {
        name: 'Sean Connery',
        id: 123
    }

    it('should create an action to add an actor', () => {
        const expectedAction = {
            type: actions.ACTOR_SELECTED,
            payload: actor
        }

        expect(actions.actorSelected(actor)).toEqual(expectedAction)
    })

    it('should create an action to delete an actor', () => {
        const expectedAction = {
            type: actions.ACTOR_DELETED,
            payload: actor
        }

        expect(actions.actorDeleted(actor)).toEqual(expectedAction)
    })
})

// describe('Async actor actions', () => {
//     const middlewares = [thunk]
//     const mockStore = configureMockStore(middlewares)
//
//     afterEach(() => {
//         nock.cleanAll()
//     })
//
//     it('creates RECEIVE_ACTORS when fetching actors is completed', () => {
//         nock(`${config.apiUrl}/search/actor`)
//             .log(console.log)
//             .get('/search/actor')
//             .query({searchTerm: "Sean"})
//             .reply(200, {data: [{"name": "Sean Connery", "id": 123}]})
//
//         const expectedActions = [
//             {type: actions.BEGIN_SEARCH_ACTORS},
//             {type: actions.RECEIVE_ACTORS, payload: {data: [{"name": "Sean Connery", "id": 123}]}}
//         ]
//
//         const store = mockStore({actorSearch: {searchResults: []}})
//
//         store.dispatch(actions.fetchActors("Sean"))
//
//         expect(store.getActions()).toEqual(expectedActions)
//     })
// })