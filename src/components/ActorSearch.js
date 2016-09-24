import React, {PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class ActorSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(<div></div>)
    }
}

ActorSearch.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
        actorName: PropTypes.string,
        id: PropTypes.number
    })),
    onKeyPress: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}