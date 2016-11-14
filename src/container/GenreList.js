import {connect} from 'react-redux'
import {genreSelected} from '../actions/GenreActions'
import GenreSelector from '../components/GenreSelector'

const mapStateToProps = (state) => {
    return {
        genres: state.genres.movieGenres
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGenreClick: (id) => {
            dispatch(genreSelected(id))
        }
    }
}

const GenreList = connect(mapStateToProps, mapDispatchToProps)(GenreSelector)

export default GenreList