import React, {Component, PropTypes} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Paper from 'material-ui/Paper'

import {fetchMovieGenres} from '../actions/GenreActions'
import {fetchReleaseYears} from '../actions/RelYearActions'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainTabs from '../components/MainTabs'
import PageSelector from '../components/PageSelector'
import SearchButtonContainer from './SearchButtonContainer'
import FilmListContainer from './FilmListContainer'

require('./App.scss')

export default class App extends Component {

    componentDidMount() {
        this.context.store.dispatch(fetchMovieGenres())
        this.context.store.dispatch(fetchReleaseYears())
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header/>
                    <div className="paper-container">
                        <Paper zDepth={3} rounded={true}>
                            <MainTabs/>
                            <SearchButtonContainer/>
                        </Paper>
                    </div>
                    <FilmListContainer/>
                    <div className="selector-container">
                        <PageSelector/>
                    </div>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}