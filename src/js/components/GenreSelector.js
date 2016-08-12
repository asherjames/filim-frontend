import React, {PropTypes} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export default class GenreSelector extends React.Component {

    constructor(props) {
        super(props)
        this.state = {genre: this.props.genres[0]}
    }

    handleChange(event, index, value) {
        this.setState({genre: value})
        this.props.onGenreClick(value)
    }

    render() {
        return (
            <DropDownMenu
                onChange={this.handleChange.bind(this)}
                value={this.state.genre}>
                {this.props.genres.map(genre =>
                    <MenuItem value={genre.id} key={genre.id} primaryText={genre.name}/>
                )}
            </DropDownMenu>
        )
    }
}

GenreSelector.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onGenreClick: PropTypes.func.isRequired
}