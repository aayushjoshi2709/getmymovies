import React from 'react'

const Card = (props) => {
    return (
        <div className= 'card'>
            <div className= 'card-image'>
                <img src={'https://image.tmdb.org/t/p/w500/'+props.card.poster_path} alt="cannot display it"/>
            </div>
            <div className= 'card-name-rating'>
                <p id="title">{props.card.title}</p>
                <p id="rating">{'(' + props.card.vote_average + ')'}</p>
            </div>
            <div className= 'card-desc'>
                <p>{props.card.overview}</p>
            </div>
        </div>
    )
}

export default Card
