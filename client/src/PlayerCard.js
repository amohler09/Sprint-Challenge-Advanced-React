import React from 'react'

export const PlayerCard = props => {
    return (
        <div className='player-div'>
            {props.players.map((item, index) => (
                <div className='player-card' key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.country}</p>
                    <p>{item.searches}</p>

                </div>
            ))}
        </div>
    )
}