import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

require('./RatingCircle.scss')

export default class RatingCircle extends React.Component {

    constructor(props) {
        super(props)
        this.colour = ""
    }

    componentWillMount() {
        if (this.props.rating < 4.0) {
            this.colour = "#FF432E"
        } else if (this.props.rating < 5.0 && this.props.rating >= 4.0) {
            this.colour = "#F7B733"
        } else if (this.props.rating < 6.0 && this.props.rating >= 5.0) {
            this.colour = "#F7E037"
        } else if (this.props.rating < 7.0 && this.props.rating >= 6.0) {
            this.colour = "#CAFF49"
        } else if (this.props.rating < 8.0 && this.props.rating >= 7.0) {
            this.colour = "#48F739"
        } else if (this.props.rating >= 8.0) {
            this.colour = "#00D2FF"
        }
    }

    render() {
        return (
            <div className="rating-circle">
                <h5>{this.props.rating > 0.00 ? this.props.rating.toFixed(2) : "No rating"}</h5>
                <CircularProgress mode="determinate"
                                  value={this.props.rating}
                                  min={0.0}
                                  max={10.0}
                                  color={this.colour}
                                  size={0.6}
                />
            </div>
        )
    }
}

RatingCircle.propTypes = {
    rating: PropTypes.number.isRequired
}