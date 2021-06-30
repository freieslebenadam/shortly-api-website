import React from 'react'

function Stat({title, text, icon}) {
    return (
        <div className="stat">
            <div className="stat-icon-wrapper">
                <img src={icon} alt="Picture not found..." />
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Stat