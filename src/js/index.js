import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './components/Header';
import Footer from './components/Footer';
import GenreSelector from './components/GenreSelector';

injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<div>
			<Header/>
			<Footer/>		
		</div>
	</MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('app'));