import React, {PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class ActorSearch extends React.Component {
    constructor(props) {
        super(props)
        this.dataSourceConfig = {
            text: 'name',
            value: 'id'
        }
    }

    render() {
        return (
            <AutoComplete
                floatingLabelText="With actor..."
                dataSource={this.props.actors}
                dataSourceConfig={this.dataSourceConfig}
                openOnFocus={true}
                maxSearchResults={10}
                filter={AutoComplete.noFilter}
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