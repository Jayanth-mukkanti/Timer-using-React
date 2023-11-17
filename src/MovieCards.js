import React from 'react'

function MovieCards(props) {
    return (
        <div className='movieCard'>
            <img
                className='movie-thumbnail'
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster}`}
            />
            <p> <b> Title : </b> {props.title} </p>
            <p> <b> Rating : </b> {props.Rating} / 10 </p>
            <p> <b> Release Date : </b> {props.ReleaseDate} </p>
        </div>
    )
}

export default MovieCards