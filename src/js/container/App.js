import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { fetchGenres } from '../actions/asyncActions'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainTabs from '../components/MainTabs'

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
                    <Footer/>       
                </div>
            </MuiThemeProvider>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}