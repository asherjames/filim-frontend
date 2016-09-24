import React, {PropTypes} from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const TvMovieRadioButton = ({movieTvChange}) => (
    <RadioButtonGroup
        onChange={(object, value) => movieTvChange(value)}
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
    movieTvChange: PropTypes.func.isRequired
}

export default TvMovieRadioButton