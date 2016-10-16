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
