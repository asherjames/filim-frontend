import React, {PropTypes} from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

import {connect} from 'react-redux'

class PageSelectorComponent extends React.Component {

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

PageSelectorComponent.propTypes = {
    numberOfPages: PropTypes.number.isRequired,
    onPageSelect: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        numberOfPages: state.search.totalPages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPageSelect: (index) => {
            dispatch(pageSelected(index))
        }
    }
}

const PageSelector = connect(mapStateToProps, mapDispatchToProps)

export default PageSelector