import React, {PropTypes} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export default class ReleaseYearSelector extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fromYear: 0,
            toYear: 0
        }
    }

    handleFromChange(event, index, value) {
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
                    onChange={this.handleToChange.bind(this)}
                    value={this.state.toYear}>
                    <MenuItem value={0} key={0} primaryText={"Older than..."} disabled={true}/>
                    {this.props.years.map(year =>
                        <MenuItem value={year} key={year} primaryText={year}/>
                    )}
                </DropDownMenu>
                <DropDownMenu
                    onChange={this.handleFromChange.bind(this)}
                    value={this.state.fromYear}>
                    <MenuItem value={0} key={0} primaryText={"Newer than..."} disabled={true}/>
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