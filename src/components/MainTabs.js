import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import GenreList from '../container/GenreList'
import MovieTvContainer from '../container/MovieTvContainer'
import ReleaseYearContainer from '../container/ReleaseYearContainer'

require('./MainTabs.scss')

let tabStyle = {
    backgroundColor: "#EFFFF3",
    color: "#FF5252"
}

const MainTabs = () => (
    <Tabs>
        <Tab style={tabStyle} label="Basic">
            <div className="pure-g tab-container">
                <div className="pure-u-1-3">
                    <GenreList/>
                </div>
                <div className="pure-u-1-3">
                    <MovieTvContainer/>
                </div>
                <div className="pure-u-1-3">
                    <ReleaseYearContainer/>
                </div>
            </div>
        </Tab>
        <Tab style={tabStyle} label="Advanced">
        </Tab>
    </Tabs>
)

export default MainTabs