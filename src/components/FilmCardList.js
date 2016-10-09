import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import FilmCard from './FilmCard'
import {config} from '../config/config'

require('./FilmCardList.scss')

export default class FilmCardList extends React.Component {

    constructor(props) {
        super(props)
        this.largeImageUrl = `http://${config.apiUrl}/image/4`
        this.smallImageUrl = `http://${config.apiUrl}/image/2`
    }

    render() {
        let cardList;
        if (this.props.films.length > 0 && !this.props.isSearching) {
            cardList = this.props.films.map(film => <FilmCard key={film.id} title={film.title}
                                                              year={film.release_date.slice(0, 4)}
                                                              smallImage={this.smallImageUrl + film.poster_path}
                                                              largeImage={this.largeImageUrl + film.backdrop_path}
                                                              mainText={film.overview}
                                                              rating={film.vote_average}/>
            )
        } else if (this.props.isSearching) {
            cardList = <div className="centreAlign"><CircularProgress color="#FF5252" size={2}/></div>
        }

        return <div className="card-container">{cardList}</div>
    }
}

FilmCardList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        release_date: PropTypes.string,
        original_title: PropTypes.string,
        backdrop_path: PropTypes.string,
        rating: PropTypes.number
    })).isRequired,
    isSearching: PropTypes.bool.isRequired
}