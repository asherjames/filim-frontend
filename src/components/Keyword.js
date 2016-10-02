import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'

const KeywordField = ({onUpdate}) => (
    <TextField hintText="Keyword..." onChange={onUpdate}/>
)

KeywordField.propTypes = {
    onUpdate: PropTypes.func.isRequired
}

export default KeywordField
