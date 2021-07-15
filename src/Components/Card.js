import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
        <Link to={"/"+props.card.id}><div ref={props.lastMovieRef} className= 'card'>
            <div className= 'card-image'>
                <img src={(props.card.poster_path)?'https://image.tmdb.org/t/p/w500/'+props.card.poster_path:"Image.png"} alt="cannot display it"/>
            </div>
            <div className= 'card-name-rating'>
                <p id="title">{props.card.title}</p>
                <p id="rating">{'(' + props.card.vote_average + ')'}</p>
            </div>
            <div className= 'card-desc'>
                <p>{props.card.overview}</p>
            </div>
        </div></Link>
    )
}

export default Card
