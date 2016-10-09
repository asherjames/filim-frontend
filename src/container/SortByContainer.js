import {connect} from 'react-redux'
import {sorterSelected} from '../actions/SortByActions'
import SortByDropdown from '../components/SortByDropdown'

const mapDispatchToProps = (dispatch) => {
    return {
        onSorterClick: (input) => {
            dispatch(sorterSelected(input))
        }
    }
}

const SortByContainer = connect(null, mapDispatchToProps)(SortByDropdown)

export default SortByContainer
