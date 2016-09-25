import {connect} from 'react-redux'
import {actorSelected, fetchActors} from '../actions/ActorActions'
import ActorSearch from '../components/ActorSearch'

const mapStateToProps = (state) => {
    return {
        actors: state.actorSearch.searchResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInput: (input) => {
            dispatch(fetchActors(input))
        },
        onSelectItem: (id) => {
            dispatch(actorSelected(id))
        }
    }
}

const ActorSearchContainer = connect(mapStateToProps, mapDispatchToProps)(ActorSearch)

export default ActorSearchContainer