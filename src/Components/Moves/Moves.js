import React from 'react'
import { useParams } from 'react-router-dom'

function Moves() {
    const { id: moveId } = useParams()
    return (
        <div key={moveId}>
            Moves <br />
            Move Id: {moveId}
        </div>
    )
}

export default Moves