import React from 'react';

const footerStyle = {
	position: 'fixed',
	textAlign: 'center',
	bottom: 0,
	left: 0,
	right: 0,
	marginBottom: '5px',
	fontFamily: 'Roboto',
	opacity: 0.5
};

const Footer = () => (
	<footer style={footerStyle}>
		<a href="https://www.themoviedb.org/documentation/api" target="_blank">
		Powered by themoviedb.org API
		</a>
	</footer>
);

export default Footer;