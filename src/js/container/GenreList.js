import {connect} from 'react-redux'
import {genreSelected} from '../actions/GenreActions'
import GenreSelector from '../components/GenreSelector'

const mapStateToProps = (state) => {
    let g
    if (state.tvOrMovie == "movie") {
        g = state.genres.movieGenres
    } else {
        g = state.genres.tvGenres
    }
    return {
        genres: g
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