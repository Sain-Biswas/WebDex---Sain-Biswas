import React from 'react'
import { useParams } from 'react-router-dom'

function Types() {
    const { id: typeId } = useParams()
    return (
        <div key={typeId}>
            Types <br />
            Type Id: {typeId}
        </div>
    )
}

export default Types