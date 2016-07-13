import React, {PropTypes} from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const TvMovieRadioButton = ({ onChangeCb }) => (
	<RadioButtonGroup 
		onChange= {(object, value) => onChangeCb(value)}
		name="radio">
			<RadioButton
				value="movie"
				label="Movies"
			/>
			<RadioButton
				value="tv"
				label="TV"
			/>
	</RadioButtonGroup>
)

TvMovieRadioButton.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default TvMovieRadioButton