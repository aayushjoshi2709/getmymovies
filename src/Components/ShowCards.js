import React from 'react'
import Card from './Card'
import './ShowCards.css'
// return the movie cards
const ShowCards = (props) => {
    return (
        <div className="container" >        
        <div id="show-cards">
        {props.cards.map((card ,index) =>
         {  // adds a callback function to the last card being displayed
            if(props.cards.length ===index + 1)
            return <Card lastMovieRef={props.lastMovieRef} key={card.id} desc={false} card={card}/>
            else
            return <Card key={card.id} desc={false} card={card}/>        
        })}
        </div>
        </div>
    )
}

export default ShowCards
