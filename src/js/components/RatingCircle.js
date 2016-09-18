import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

export default class RatingCircle extends React.Component {

    constructor(props) {
        super(props)
        this.colour = ""
    }

    componentWillMount() {
        if (this.props.rating < 4.0) {
            this.colour = "#FF432E"
        } else if (this.props.rating < 5.0 && this.props.rating >= 4.0) {
            this.colour = "#FFAC00"
        } else if (this.props.rating < 6.0 && this.props.rating >= 5.0) {
            this.colour = "#FFEB00"
        } else if (this.props.rating < 7.0 && this.props.rating >= 6.0) {
            this.colour = "#DBFF00"
        } else if (this.props.rating < 8.0 && this.props.rating >= 7.0) {
            this.colour = "#1AFF00"
        } else if (this.props.rating >= 8.0) {
            this.colour = "#00D2FF"
        }
    }

    render() {
        return (
            <div style={this.props.style ? this.props.style : ""}>
                <h6 style={this.textStyle}>{this.props.rating}</h6>
                <CircularProgress mode="determinate"
                                  value={this.props.rating}
                                  min={0.0}
                                  max={10.0}
                                  color={this.colour}
                                  size={0.5}
                />
            </div>
        )
    }
}

RatingCircle.propTypes = {
    rating: PropTypes.number.isRequired,
    style: PropTypes.object
}