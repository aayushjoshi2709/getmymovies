import React from 'react'
import Card from './Card'
import './ShowCards.css'
import Header from './Header'
// return the movie cards

// sort function for sorting of movies

const ShowCards = (props) => {
    
    function GetSortOrder(key) {    
        return function(a, b) {    
            if (Date.parse(a[key]) < Date.parse(b[key])) {    
                return 1;    
            } else if (Date.parse(a[key]) > Date.parse(b[key])) {    
                return -1;    
            }    
            return 0;    
        }    
    }    
    // sort the cards according to there release dates
    props.cards.sort(GetSortOrder("release_date")); 
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
