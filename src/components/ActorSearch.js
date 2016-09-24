import React, {PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class ActorSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state.dataSource = this.props.actors
    }

    render() {
        return (
            <AutoComplete
                hintText="With actor..."
                dataSource={this.state.dataSource}
                onNewRequest={this.props.onSelectItem}
                onUpdateInput={this.props.onInput}
            />
        )
    }
}

ActorSearch.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
        actorName: PropTypes.string,
        id: PropTypes.number
    })),
    onInput: PropTypes.func.isRequired,
    onSelectItem: PropTypes.func.isRequired
}