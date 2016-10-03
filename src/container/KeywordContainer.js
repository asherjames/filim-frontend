import {connect} from 'react-redux'
import {keywordChanged} from '../actions/KeywordActions'
import KeywordField from '../components/Keyword'

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdate: (input) => {
            dispatch(keywordChanged(input))
        }
    }
}

const KeywordContainer = connect(null, mapDispatchToProps)(KeywordField)

export default KeywordContainer