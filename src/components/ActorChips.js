import React, {PropTypes} from 'react'
import Chip from 'material-ui/Chip'

require('./ActorChips.scss')

export default class ActorChips extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="chip-container">
                {this.props.actors.map(actor =>
                    <Chip key={actor.id} className="chip" onRequestDelete={this.props.deleteActor}>
                        {actor.name}
                    </Chip>
                )}
            </div>
        )
    }
}

ActorChips.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
    })),
    deleteActor: PropTypes.func.isRequired,
}
