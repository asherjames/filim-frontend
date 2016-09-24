import React from 'react'
import Paper from 'material-ui/Paper'

require('./Header.scss')

const paperStyle = {
    borderRadius: 5,
	backgroundColor: '#00D49E'
}

const Header = () => (
	<div className="header-container">
		<Paper className="header-paper" style={paperStyle} zDepth={4} rounded={true}>
			<h1 className="header-text">Filim</h1>
		</Paper>	
	</div>
)

export default Header