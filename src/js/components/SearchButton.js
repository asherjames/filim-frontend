import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Search from 'material-ui/svg-icons/action/search'

const SearchButton = ({onSearchClick}) => (
    <RaisedButton
        label="Search..."
        icon={<Search/>}
        backgroundColor="#00D49E"
        onClick={onSearchClick}
    />
)

SearchButton.propTypes = {
    onSearchClick: PropTypes.func.isRequired
}

export default SearchButton