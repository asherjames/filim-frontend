import React, {PropTypes} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const ReleaseYearSelector = ({years, onFromYearClick, onToYearClick}) => (
    <div>
        <DropDownMenu
            onChange = {(event, key, payload) => onFromYearClick(payload)}>
            {years.map(year =>
                <MenuItem value={year} key={year} primaryText={year}/>
            )}
        </DropDownMenu>
        <DropDownMenu
            onChange = {(event, key, payload) => onToYearClick(payload)}>
            {years.map(year =>
                <MenuItem value={year} key={year} primaryText={year}/>
            )}
        </DropDownMenu>
    </div>
)

ReleaseYearSelector.propTypes = {
    years: PropTypes.arrayOf(PropTypes.number).isRequired,
    onFromYearClick: PropTypes.func.isRequired,
    onToYearClick: PropTypes.func.isRequired
}

export default ReleaseYearSelector