import {connect} from 'react-redux'
import {fromReleaseYearChanged, toReleaseYearChanged} from '../actions/RelYearActions'
import ReleaseYearSelector from '../components/ReleaseYearSelector'

const mapStateToProps = (state) => {
    return {
        years: state.releaseYear.years
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFromYearClick: (year) => {
            dispatch(fromReleaseYearChanged(year))
        },
        onToYearClick: (year) => {
            dispatch(toReleaseYearChanged(year))
        }
    }
}


const ReleaseYearContainer = connect(mapStateToProps, mapDispatchToProps)(ReleaseYearSelector)

export default ReleaseYearContainer