import {connect} from 'react-redux'
import {toggleTvMovie} from '../actions/TvMovieActions'
import TvMovieRadioButton from '../components/TvMovieRadioButton'

const mapDispatchToProps = (dispatch) => {
    return {
        movieTvChange: (value) => {
            dispatch(toggleTvMovie(value))
        }
    }
}

const MovieTvContainer = connect(null, mapDispatchToProps)(TvMovieRadioButton)

export default MovieTvContainer