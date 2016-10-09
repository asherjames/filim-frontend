import React, {PropTypes} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward'
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'


export default class SortByDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {sorter: ''}
        this.sorters = [
            {
                id: 'popularity.asc',
                name: 'Popularity',
                asc: true
            },
            {
                id: 'popularity.desc',
                name: 'Popularity',
                asc: false
            },
            {
                id: 'release_date.asc',
                name: 'Release date',
                asc: true
            },
            {
                id: 'release_date.desc',
                name: 'Release date',
                asc: false
            },
            {
                id: 'original_title.asc',
                name: 'Title',
                asc: true
            },
            {
                id: 'original_title.desc',
                name: 'Title',
                asc: false
            },
            {
                id: 'vote_average.asc',
                name: 'Rating',
                asc: true
            },
            {
                id: 'vote_average.desc',
                name: 'Rating',
                asc: false
            },
            {
                id: 'vote_count.asc',
                name: 'Number of votes',
                asc: true
            },
            {
                id: 'vote_count.desc',
                name: 'Number of votes',
                asc: true
            }
        ]
    }

    handleChange(event, index, value) {
        this.setState({sorter: value})
        this.props.onSorterClick(value)
    }

    render() {
        return (
            <DropDownMenu onChange={this.handleChange} value={this.state.sorter}>
                <MenuItem value={0} key={0} primaryText="Sort by..." disabled={true}/>
                {this.sorters.map(sorter =>
                    <MenuItem value={sorter.id}
                              key={sorter.id}
                              primaryText={sorter.name}
                              leftIcon={sorter.asc ? <NavigationArrowUpward/> : <NavigationArrowDownward/>}
                    />
                )}
            </DropDownMenu>
        )
    }
}

SortByDropdown.propTypes = {
    onSorterClick: PropTypes.func.isRequired
}