import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

export default class RatingCircle extends React.Component {

    constructor(props) {
        super(props)
        this.colour = ""
    }

    componentWillMount() {
        if (this.props.rating < 5.0) {
            this.colour = "#FF432E"
        } else if (this.props.rating < 6.0 && this.props.rating >= 5.0) {
            this.colour = "#FFAC00"
        } else if (this.props.rating < 7.0 && this.props.rating >= 6.0) {
            this.colour = "#FFEB00"
        } else if (this.props.rating < 8.0 && this.props.rating >= 7.0) {
            this.colour = "#DBFF00"
        } else if (this.props.rating < 9.0 && this.props.rating >= 8.0) {
            this.colour = "#1AFF00"
        } else if (this.props.rating >= 9.0) {
            this.colour = "#00D2FF"
        }
    }

    render() {
        return(
            <div>
                <span>{this.props.rating}</span>
                <CircularProgress value={this.props.rating} min={0.0} max={10.0} color={this.colour}/>
            </div>
        )
    }
}

RatingCircle.propTypes = {
    rating: PropTypes.number.isRequired
}