import React from 'react'


export const AddPlayerForm = props => {

    return (
        <form onSubmit={props.addItem}>
            <input
            type='text'
            name='playerInput'
            onChange={props.handleChanges}
            value={props.nameInput}
            
            />
            <button className='add'>Add Player</button>
        </form>
    )
}
