import React from 'react'
import './Loading.css'
import Ball from './Loading_Ball.png'

function Loading() {
    return (
        <div className="container">
            <div className="pokeball">
                <img src={Ball} />
            </div>
            <p className="text">Loading...</p>
        </div>
    )
}

export default Loading