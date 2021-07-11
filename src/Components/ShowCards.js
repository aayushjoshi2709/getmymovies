import React from 'react'
import Card from './Card'
import './ShowCards.css'
const ShowCards = (props) => {
    return (
        <div className="container">        
        <div id="show-cards" >
        {props.cards.map((card) => {
            return <Card card={card}/>        
        })}
        </div>
        </div>
    )
}

export default ShowCards
