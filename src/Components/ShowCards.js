import React from 'react'
import Card from './Card'
import './ShowCards.css'
const ShowCards = (props) => {
    return (
        <div id="show-cards" className="auto-margin">
        {props.cards.map((card) => {
            return <Card card={card}/>        
        })}
        </div>
    )
}

export default ShowCards
