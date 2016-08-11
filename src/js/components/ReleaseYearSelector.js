import React, {PropTypes} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export default class ReleaseYearSelector extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fromYear: this.props.years[0],
            toYear: this.props.years[0]
        }
    }

    handleFromChange (event, index, value) {
        this.setState({fromYear: value})
        this.props.onFromYearClick(value)
    }

    handleToChange(event, index, value) {
        this.setState({toYear: value})
        this.props.onToYearClick(value)
    }

    render() {
        return (
            <div>
                <DropDownMenu
                    onChange={this.handleFromChange.bind(this)}
                    value={this.state.fromYear}>
                    {this.props.years.map(year =>
                        <MenuItem value={year} key={year} primaryText={year}/>
                    )}
                </DropDownMenu>
                <DropDownMenu
                    onChange={this.handleToChange.bind(this)}
                    value={this.state.toYear}>
                    {this.props.years.map(year =>
                        <MenuItem value={year} key={year} primaryText={year}/>
                    )}
                </DropDownMenu>
            </div>

        )
    }
}

ReleaseYearSelector.propTypes = {
    years: PropTypes.arrayOf(PropTypes.number).isRequired,
    onFromYearClick: PropTypes.func.isRequired,
    onToYearClick: PropTypes.func.isRequired
}