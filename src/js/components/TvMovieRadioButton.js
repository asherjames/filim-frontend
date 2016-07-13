import React, {PropTypes} from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const TvMovieRadioButton = () => (
	<RadioButtonGroup name="radio">
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