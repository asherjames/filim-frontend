import { connect } from 'react-redux'
import { genreSelected } from '../actions/actions'
import GenreSelector from '../components/GenreSelector'

const mapStateToProps = (state) => {
    return {
        genres: state.genres
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