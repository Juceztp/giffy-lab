import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card-gif animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
