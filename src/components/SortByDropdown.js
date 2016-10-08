import React, {PropTypes} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'


export default class SortByDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {sorter: ''}
    }

    handleChange(event, index, value) {
        this.setState({sorter: value})
        this.props.onSorterClick(value)
    }

    render() {
        return (
            <DropDownMenu
                onChange={this.handleChange}
                value={this.state.sorter}>
                <MenuItem value={0} key={0} primaryText="Sort by..." disabled={true}/>
                {this.props.sorters.map(sorter =>
                    <MenuItem value={sorter.id} key={sorter.id} primaryText={sorter.name}/>
                )}
            </DropDownMenu>
        )
    }
}

SortByDropdown.propTypes = {
    sorters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onSorterClick: PropTypes.func.isRequired
}