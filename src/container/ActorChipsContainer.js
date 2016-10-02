import {connect} from 'react-redux'
import {actorDeleted} from '../actions/ActorActions'
import ActorChips from '../components/ActorChips'

const mapStateToProps = (state) => {
    return {
        actors: state.actorSearch.selectedActors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteActor: (actor) => {
            dispatch(actorDeleted(actor))
        }
    }
}

const SelectedActors = connect(mapStateToProps, mapDispatchToProps)(ActorChips)

export default SelectedActors
