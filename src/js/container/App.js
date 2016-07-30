import React, { Component, PropTypes } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { fetchGenres } from '../actions/asyncActions'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainTabs from '../components/MainTabs'
import SearchButtonContainer from './SearchButtonContainer'

export default class App extends Component {

    componentDidMount() {
        this.context.store.dispatch(fetchGenres())
    }   

    render() {
        return(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header/>
                    <MainTabs/>
                    <SearchButtonContainer/>
                    <Footer/>       
                </div>
            </MuiThemeProvider>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}