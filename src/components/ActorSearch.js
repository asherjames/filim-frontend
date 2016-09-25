import React, {PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class ActorSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [{id: 1, name: "Ash"}, {id: 2, name: "R2"}]
        }
    }

    render() {
        return (
            <AutoComplete
                hintText="With actor..."
                dataSource={this.state.dataSource}
                filter={AutoComplete.fuzzyFilter}
                maxSearchResults={10}
                onNewRequest={this.props.onSelectItem}
                onUpdateInput={this.props.onInput}
            />
        )
    }
}

ActorSearch.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
    })),
    onInput: PropTypes.func.isRequired,
    onSelectItem: PropTypes.func.isRequired
}