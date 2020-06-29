import React from 'react'

function Dinner(props) {
    return (
        <div className="font">
            <h1>We have {props.dishName} today</h1>
            <h1>In Sweet we have {props.sweetDish} today</h1>
        
        </div>
    )
}

export default Dinner
