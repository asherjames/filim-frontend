import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

export default class RatingCircle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            colour: "00D438"
        }
    }

    componentDidMount() {

    }
}

RatingCircle.propTypes = {
    rating: PropTypes.number.isRequired
}