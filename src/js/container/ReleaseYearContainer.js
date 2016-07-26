import { connect } from 'react-redux'
import { fromReleaseChanged, toReleaseChanged } from '../actions/actions'
import ReleaseYearSelector from '../components/ReleaseYearSelector'

const mapStateToProps = (state) => {
    return {
        years: state.async.years
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFromYearClick: (year) => {
            dispatch(fromReleaseChanged(year))
        },
        onToYearClick: (year) => {
            dispatch(toReleaseChanged(year))
        }
    }
}


const ReleaseYearContainer = connect(mapStateToProps, mapDispatchToProps)(ReleaseYearSelector)

export default ReleaseYearContainer