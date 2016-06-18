import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Content from './components/Content';

injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Content/>
	</MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('app'));