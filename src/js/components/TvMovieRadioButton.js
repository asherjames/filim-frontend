import React from 'react'
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

export default TvMovieRadioButton