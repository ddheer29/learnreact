import React from 'react'

const Movies = ({title, year, img}) => {
    return (
        <div className='movie'>
            <img src={img} alt="" />
            <p>{title}</p>
            <p>{year}</p>
        </div>
    )
}

export default Movies