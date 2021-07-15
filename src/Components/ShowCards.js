import React from 'react'
import Card from './Card'
import './ShowCards.css'
import Header from './Header'
// return the movie cards
const ShowCards = (props) => {
    return (
        <>
        <Header isSearchBar={true} handleOnChange={props.change} /> 
        <div className="container" >        
        <div id="show-cards">
        {props.cards.map((card ,index) =>
         {  // adds a callback function to the last card being displayed
            if(props.cards.length ===index + 1)
            return <Card lastMovieRef={props.lastMovieRef} key={card.id} card={card}/>
            else
            return <Card key={card.id} desc={false} card={card}/>        
        })}
        </div>
        </div>
        </>
    )
}

export default ShowCards
