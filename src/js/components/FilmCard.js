import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class FilmCard extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
		}
	}

	handleExpandChange = (expanded) => {
	    this.setState({expanded: expanded})
    }

	render() {
		return(
			<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.year}
                    avatar={this.props.smallImage}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                    <FlatButton label="More info..." onTouchTap={this.handleExpandChange(true)} disabled={!this.state.expanded}/>
                </CardText>
                <CardMedia
                    expandable={true}
                >
                    <img src={this.props.largeImage}/>
                </CardMedia>
                <CardTitle title={this.props.title} expandable={true}/>
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
    mainText: PropTypes.string.isRequired
}