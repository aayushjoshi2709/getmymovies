import React from 'react'

const Card = () => {
    return (
        <div className= 'card'>
            <div className= 'card-image'>
                <img src={prop.src}/>
            </div>
            
            <div className= 'card-desc'>
                <img src={prop.desc}/>
            </div>
        </div>
    )
}

export default Card
