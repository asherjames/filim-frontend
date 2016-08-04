import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import GenreList from '../container/GenreList'
import MovieTvContainer from '../container/MovieTvContainer'
import ReleaseYearContainer from '../container/ReleaseYearContainer'

const MainTabs = () => (
    <Tabs>
        <Tab label="Basic">
            <GenreList/>
            <MovieTvContainer/>
            <ReleaseYearContainer/>
        </Tab>
        <Tab label="Advanced">
        </Tab>
    </Tabs>
)

export default MainTabs