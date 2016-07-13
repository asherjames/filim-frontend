import { connect } from 'react-redux'
import TvMovieRadioButton from '../components/TvMovieRadioButton'

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (value) => {
			dispatch(toggleTvMovie(value))
		}
	}
}