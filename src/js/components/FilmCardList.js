import React, {PropTypes} from 'react'
import FilmCard from './FilmCard'
import Film from '../objects/Film'
import {Config} from '../config/config'

export default class FilmCardList extends React.Component {

    constructor(props) {
        super(props)
        this.largeImageUrl = `http://${Config.apiUrl}/image/4`
        this.smallImageUrl = `http://${Config.apiUrl}/image/2`
        this.listStyle = {
            textAlign: "left"
        }
    }

    createFilmObjects() {
        let filmList = []
        for (let f of this.props.films) {
            filmList.push(new Film(f.id, f.poster_path, f.overview, f.release_date, f.original_title, f.backdrop_path))
        }
        return filmList
    }

    render() {
        let cardList;
        if (this.props.films.length > 0) {
            let filmList = this.createFilmObjects()
            cardList = filmList.map(film => <FilmCard title={film.title} year={film.date.slice(0, 4)}
                                                      smallImage={this.smallImageUrl + film.posterImage}
                                                      largeImage={this.largeImageUrl + film.backdropImage}
                                                      mainText={film.overview}/>)
        }

        return <div className="pure-u-1-2" style={this.listStyle}>{cardList}</div>
    }
}

FilmCardList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        release_date: PropTypes.string,
        original_title: PropTypes.string,
        backdrop_path: PropTypes.string
    })).isRequired
}