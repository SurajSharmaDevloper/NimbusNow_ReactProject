import React from 'react';
import '../Css/card.css'

const Card = ({ heading, children }) => {
    return (
        <div className='card'>
            <div className='heading'>
                <h2>{heading}</h2>
            </div>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

export default Card
