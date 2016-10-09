import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'

const KeywordField = ({onUpdate}) => (
    <TextField floatingLabelText="Keyword..." onChange={(event) => onUpdate(event.target.value)}/>
)

KeywordField.propTypes = {
    onUpdate: PropTypes.func.isRequired
}

export default KeywordField
