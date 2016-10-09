import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import ActorChipsContainer from '../container/ActorChipsContainer'
import ActorSearchContainer from '../container/ActorSearchContainer'
import GenreList from '../container/GenreList'
import KeywordContainer from '../container/KeywordContainer'
import MovieTvContainer from '../container/MovieTvContainer'
import ReleaseYearContainer from '../container/ReleaseYearContainer'
import SortByContainer from '../container/SortByContainer'

require('./MainTabs.scss')

let tabStyle = {
    backgroundColor: "#EFFFF3",
    color: "#FF5252"
}

const MainTabs = () => (
    <Tabs>
        <Tab style={tabStyle} label="Basic">
            <div className="tab-container">
                <div className="tab">
                    <GenreList/>
                </div>
                <div className="tab">
                    <MovieTvContainer/>
                </div>
                <div className="tab">
                    <SortByContainer/>
                </div>
            </div>
        </Tab>
        <Tab style={tabStyle} label="Advanced">
            <div className="tab-container">
                <div className="tab">
                    <ActorSearchContainer/>
                    <ActorChipsContainer/>
                </div>
                <div className="tab">
                    <ReleaseYearContainer/>
                </div>
                <div className="tab">
                    <KeywordContainer/>
                </div>
            </div>
        </Tab>
    </Tabs>
)

export default MainTabs