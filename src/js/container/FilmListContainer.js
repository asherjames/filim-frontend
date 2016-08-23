import {connect} from 'react-redux'
import FilmCardList from '../components/FilmCardList'

const mapStateToProps = (state) => {
    return {
        films: state.search.searchResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FilmListContainer = connect(mapStateToProps, mapDispatchToProps)(FilmCardList)

export default FilmListContainer