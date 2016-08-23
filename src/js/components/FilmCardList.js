import React, {PropTypes} from 'react'
import FilmCard from './FilmCard'
import Film from '../objects/Film'

export default class FilmCardList extends React.Component {

    constructor(props) {
        super(props)
    }

    createFilmObjects() {
        let filmList = []
        for (let f of this.props.films) {
            filmList.push(new Film(f.poster_path, f.overview, f.releaseYear, f.original_title, f.backdrop_path))
        }
        return filmList
    }

    render() {
        let filmList = this.createFilmObjects()
        let cardList = filmList.map(film => <FilmCard title={film.title} year={film.date}
                                                      smallImage={film.posterImage} largeImage={film.backdropImage}
                                                      mainText={film.overview}/>)

        return <div>{cardList}</div>
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