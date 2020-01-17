import React from 'react'

const PlayerCard = props => {


    return(
        <div>
            {props.player.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.country}</p>
                    <p>{item.searches}</p>
                
                </div>
            ))}
        </div>
    )
}

export default PlayerCard;