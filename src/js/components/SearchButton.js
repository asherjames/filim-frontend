import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Search from 'material-ui/svg-icons/action/search'

const SearchButton = ({onSearchClick}) => {
    <RaisedButton
        label="Search..."
        labelPosition="before"
        icon={<Search/>}
        onClick={onSearchClick}
    />
}

SearchButton.propTypes = {
    onSearchClick: PropTypes.func.isRequired
}

export default SearchButton