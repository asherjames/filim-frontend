import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class GenreSelector extends React.Component {

	constructor() {
		super();
		this.state = {
			genres: [],
			value: ""
		};
	}

	handleClick = (event, index, value) => {this.setState({value})};

	render() {
		return(
			<DropDownMenu maxHeight={25} value={this.state.value} onChange={this.handleClick}>
			</DropDownMenu>
		)
	}
}