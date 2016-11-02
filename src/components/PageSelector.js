import React, {PropTypes} from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

export default class PageSelector extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    select = (index) => {
        this.setState({selectedIndex: index})
        this.props.onPageSelect(index + 1)
    }

    render() {
        return(
            <Paper zDepth={1}>
                <BottomNavigation>
                    {Array(this.props.numberOfPages).fill().map((_,i) =>
                        <BottomNavigationItem
                            label={i + 1}
                            onTouchTap={this.select(i + 1)}
                        />
                    )}
                </BottomNavigation>
            </Paper>
        )
    }
}

PageSelector.propTypes = {
    numberOfPages: PropTypes.number.isRequired,
    onPageSelect: PropTypes.func.isRequired
}