import React from 'react'

const Card = (props) => {
    return (
        <div className= 'card'>
            <div className= 'card-image'>
                <img src={props.card.src} alt="cannot display it"/>
            </div>
            <div className= 'card-name-rating'>
                <p>{props.card.name}</p>
                <p>{props.card.rating}</p>
            </div>
            <div className= 'card-desc'>
                <p>{props.card.desc}</p>
            </div>
        </div>
    )
}

export default Card
