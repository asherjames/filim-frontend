import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { fetchGenres } from '../actions'
import Header from './components/Header';
import Footer from './components/Footer';
import GenreSelector from './components/GenreSelector'

export default class App extends Component {

	render() {
		return(
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<Header/>
					<Footer/>		
				</div>
			</MuiThemeProvider>
		)
	}
}