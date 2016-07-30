import { connect } from 'react-redux'
import { searchClicked } from '../actions/actions'
import SearchButton from '../components/SearchButton'

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchClick: () => {
            dispatch(searchClicked())
        }
    }
}

const SearchButtonContainer = connect(null, mapDispatchToProps)(SearchButton)

export default SearchButtonContainer