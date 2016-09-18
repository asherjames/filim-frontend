import React, {PropTypes} from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import RatingCircle from './RatingCircle'

export default class FilmCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
        this.style = {
            margin: "10px 10px"
        }
        this.ratingCircleStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "0.8em"
        }
    }

    handleExpandChange(expanded) {
        this.setState({expanded: expanded})
    }

    render() {
        return (
            <Card style={this.style} expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.year}
                    avatar={this.props.smallImage}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <RatingCircle rating={this.props.rating} style={this.ratingCircleStyle}/>
                <CardMedia expandable={true} overlay={<CardTitle title={this.props.title} subtitle={this.props.year}/>}>
                    <img src={this.props.largeImage}/>
                </CardMedia>
                <CardText expandable={true}>
                    {this.props.mainText}
                </CardText>
            </Card>
        )
    }
}

FilmCard.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    smallImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}