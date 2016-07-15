import { connect } from 'react-redux'
import { toggleTvMovie } from '../actions/actions'
import TvMovieRadioButton from '../components/TvMovieRadioButton'

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCb: (value) => {
            dispatch(toggleTvMovie(value))
        }
    }
}

const MovieTvContainer = connect(null, mapDispatchToProps)(TvMovieRadioButton)

export default MovieTvContainer