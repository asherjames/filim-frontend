import React, {PropTypes} from 'react'
import UltimatePagination from 'react-ultimate-pagination-material-ui'
import Paper from 'material-ui/Paper'
import {connect} from 'react-redux'

import {pageIndexSelected} from '../actions/PageSelectorActions'
import {searchClicked} from '../actions/SearchActions'

require('./PageSelector.scss')

class PageSelectorComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 1
        }
    }

    select(index) {
        this.setState({selectedIndex: index})
        this.props.onPageSelect(index + 1)
    }

    render() {
        if (this.props.display) {
            return (
                <div className="selector-component">
                    <Paper zDepth={2}>
                        <UltimatePagination currentPage={this.state.selectedIndex}
                                            totalPages={this.props.numberOfPages}
                                            onChange={this.select.bind(this)}
                        />
                    </Paper>
                </div>
            )
        } else {
            return null
        }
    }
}

PageSelectorComponent.propTypes = {
    numberOfPages: PropTypes.number.isRequired,
    onPageSelect: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        numberOfPages: state.search.totalPages,
        display: state.search.hasSearched
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPageSelect: (index) => {
            dispatch(pageIndexSelected(index))
            dispatch(searchClicked())
        }
    }
}

const PageSelector = connect(mapStateToProps, mapDispatchToProps)(PageSelectorComponent)

export default PageSelector