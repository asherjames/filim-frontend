import React, {PropTypes} from 'react'
import FilmCard from './FilmCard'
import Film from '../objects/Film'

export default class FilmCardList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let filmList = this.props.films.map(film => <FilmCard title={film.title} year={film.year}
                                                              smallImage={film.smallImage} largeImage={film.largeImage}
                                                              mainText={film.mainText}/>)
        return <div>{filmList}</div>
    }
}

FilmCardList.propTypes = {
    films: PropTypes.arrayOf(instanceOf(Film)).isRequired
}