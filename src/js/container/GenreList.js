import { connect } from 'react-redux'
import GenreSelector from '../components/GenreSelector'

const mapStateToProps = (state) => {
	return {
		genres: state.genres
	}
}

const GenreList = connect(mapStateToProps)(GenreSelector)

export default GenreList