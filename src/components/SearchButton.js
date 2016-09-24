import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Search from 'material-ui/svg-icons/action/search'

require('./SearchButton.scss')

const SearchButton = ({onSearchClick}) => (
    <div className="search-container">
        <RaisedButton
            className="search-button"
            label="Search..."
            icon={<Search/>}
            backgroundColor="#00D49E"
            onClick={onSearchClick}
        />
    </div>
)

SearchButton.propTypes = {
    onSearchClick: PropTypes.func.isRequired
}

export default SearchButton