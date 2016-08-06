import React from 'react'
import Paper from 'material-ui/Paper'

const containerStyle = {
	display: 'flex',
    justifyContent: 'center'
}

const paperStyle = {
	height: 150,
	width: 800,
	display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
	backgroundColor: '#00D49E'
}

const textStyle = {
	fontFamily: 'Fjalla One',
	fontSize: '400%',
	color: '#D94536'
}

const Header = () => (
	<div style={containerStyle}>
		<Paper style={paperStyle} zDepth={4} rounded={true}>
			<h1 style={textStyle}>Filim</h1>
		</Paper>	
	</div>
)

export default Header