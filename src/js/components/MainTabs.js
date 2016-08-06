import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import GenreList from '../container/GenreList'
import MovieTvContainer from '../container/MovieTvContainer'
import ReleaseYearContainer from '../container/ReleaseYearContainer'

const MainTabs = () => (
    <Tabs>
        <Tab label="Basic">
            <div className="pure-g">
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
        <Tab label="Advanced">
        </Tab>
    </Tabs>
)

export default MainTabs