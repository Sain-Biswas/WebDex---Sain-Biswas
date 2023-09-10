import React, { useEffect, useState } from 'react'
import { moveFetcher } from './moveFetcher'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

function Moves() {
    const { id: moveId } = useParams()
    const [loading, setLoading] = useState(null)


    useEffect(() => {
        setLoading(true)
        const fetch = async () => {
            const moveInfo = await moveFetcher(moveId)
            console.log(moveInfo)
        }
        fetch();
        setLoading(false)
    }, [moveId])



    if (loading) {
        return (
            < Loading />
        )
    }

    return (
        <div key={moveId}>
            Moves <br />
            Move Id: {moveId}
        </div>
    )
}

export default Moves