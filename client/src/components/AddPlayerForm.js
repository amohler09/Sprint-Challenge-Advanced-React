import React from 'react'

const AddPlayerForm = props => {
    return (
        <form>
            <input
            type='text'
            name='playerInput'
            value={props.playerInput}
        </form>
    )
}