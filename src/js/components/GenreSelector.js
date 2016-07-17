import React, {PropTypes} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const GenreSelector = ({genres, onGenreClick}) => (
    <DropDownMenu 
        onChange = {(event, key, payload) => onGenreClick(payload)}>
        {genres.map(genre => 
            <MenuItem value={genre.id} key={genre.id} primaryText={genre.name}/>
        )}
    </DropDownMenu>
)

GenreSelector.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onGenreClick: PropTypes.func.isRequired
}

export default GenreSelector